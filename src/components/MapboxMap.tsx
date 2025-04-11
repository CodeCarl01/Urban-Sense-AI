
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { cn } from '@/lib/utils';

// Define traffic color scheme for road lines
const trafficColors = {
  low: "#4CAF50",      // Green for low traffic
  medium: "#FFC107",   // Yellow for medium traffic
  high: "#FF5722",     // Orange for higher traffic
  severe: "#E53935",   // Red for severe congestion
  incident: "#9C27B0", // Purple for incidents
};

interface MapboxMapProps {
  className?: string;
  mapType: 'traffic' | 'prediction' | 'alerts' | 'heatmap';
  selectedAxis?: string;
}

// Update with the token provided by the user
const MAPBOX_TOKEN = 'pk.eyJ1Ijoiem9ob2ZyaWFyZSIsImEiOiJjbTk1aHZzeXcxNWF0MmxxdjZxNDZyeXBuIn0.JzXnYEnYpDuhzgKVa-Hlaw';

const MapboxMap: React.FC<MapboxMapProps> = ({ className, mapType, selectedAxis = 'akpakpa-calavi' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordinates for major axes in Cotonou and surroundings
  const axesCoordinates: Record<string, { center: [number, number], bounds?: [[number, number], [number, number]], routeCoordinates?: [number, number][] }> = {
    // Major connecting axes
    'akpakpa-calavi': { 
      center: [2.38, 6.37], 
      bounds: [[2.33, 6.42], [2.43, 6.32]],
      routeCoordinates: [
        [2.422, 6.352], // Akpakpa
        [2.415, 6.355],
        [2.400, 6.360],
        [2.392, 6.365],
        [2.382, 6.370],
        [2.375, 6.373],
        [2.360, 6.375],
        [2.350, 6.380],
        [2.340, 6.390],
        [2.330, 6.400],
        [2.325, 6.410], // Calavi
      ]
    },
    'godomey-cotonou-centre': { 
      center: [2.355, 6.370], 
      routeCoordinates: [
        [2.330, 6.375], // Godomey
        [2.340, 6.373],
        [2.350, 6.371],
        [2.360, 6.370],
        [2.370, 6.369],
        [2.380, 6.368], // Cotonou centre
      ]
    },
    'agla-cadjehoun': { 
      center: [2.360, 6.360],
      routeCoordinates: [
        [2.335, 6.355], // Agla
        [2.345, 6.355],
        [2.355, 6.355],
        [2.365, 6.355],
        [2.375, 6.355],
        [2.385, 6.355], // Cadjehoun
      ]
    },
    'ainouko-fidjrosse': { 
      center: [2.385, 6.345],
      routeCoordinates: [
        [2.400, 6.350], // Ainouko
        [2.395, 6.348],
        [2.390, 6.345],
        [2.385, 6.342],
        [2.380, 6.340],
        [2.375, 6.338], // Fidjrosse
      ]
    },
    'gbedjromede-placodji': { 
      center: [2.395, 6.360],
      routeCoordinates: [
        [2.410, 6.365], // Gbedjromede
        [2.405, 6.363],
        [2.400, 6.361],
        [2.395, 6.359],
        [2.390, 6.357],
        [2.385, 6.355], // Placodji
      ]
    },
    'agla-dantokpa': { 
      center: [2.350, 6.350],
      routeCoordinates: [
        [2.335, 6.355], // Agla
        [2.340, 6.353],
        [2.345, 6.351],
        [2.350, 6.349],
        [2.355, 6.347],
        [2.362, 6.345], // Dantokpa
      ]
    },
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const axisConfig = axesCoordinates[selectedAxis] || axesCoordinates['akpakpa-calavi'];

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',  // Using a dark style for better contrast with colored roads
      center: axisConfig.center,
      zoom: 13,
      pitch: 30,
      attributionControl: false
    });

    // Add navigation controls
    newMap.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    newMap.on('load', () => {
      setMapLoaded(true);
      
      // Add realistic traffic data as lines
      addTrafficLines(newMap, selectedAxis);
      
      // Add a marker for the congestion point
      const markerPos: [number, number] = getCongestedPointForAxis(selectedAxis);
      
      const marker = new mapboxgl.Marker({
        color: "#e71d36",
      })
        .setLngLat(markerPos)
        .addTo(newMap);
      
      if (mapType === 'alerts') {
        const popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(markerPos)
          .setHTML('<div class="p-2 text-sm"><strong>Alerte:</strong> Accident<br/>Retard estimé: 35min</div>')
          .addTo(newMap);
      }

      // Add population density data for the heatmap view
      addPopulationData(newMap, selectedAxis);

      // If there's a bounds configuration, fit map to these bounds
      if (axisConfig.bounds) {
        newMap.fitBounds(axisConfig.bounds, { padding: 50 });
      }
    });
    
    map.current = newMap;
    
    return () => {
      newMap.remove();
    };
  }, [selectedAxis]);

  // Function to get a realistic congestion point for a given axis
  const getCongestedPointForAxis = (axis: string): [number, number] => {
    const axisConfig = axesCoordinates[axis];
    if (!axisConfig || !axisConfig.routeCoordinates || axisConfig.routeCoordinates.length < 3) {
      return [2.358, 6.372]; // Default point if no route defined
    }
    
    // Return a point near the middle of the route for congestion
    const midIndex = Math.floor(axisConfig.routeCoordinates.length / 2);
    return axisConfig.routeCoordinates[midIndex];
  };

  // Update visualization based on mapType
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    
    const mapInstance = map.current;
    
    // Hide all layers first
    ['traffic-low', 'traffic-medium', 'traffic-high', 'traffic-severe', 'population-heat', 'contour-lines'].forEach(layer => {
      if (mapInstance.getLayer(layer)) {
        mapInstance.setLayoutProperty(layer, 'visibility', 'none');
      }
    });
    
    if (mapType === 'traffic' || mapType === 'prediction') {
      // Show current traffic lines
      ['traffic-low', 'traffic-medium', 'traffic-high', 'traffic-severe'].forEach(layer => {
        if (mapInstance.getLayer(layer)) {
          mapInstance.setLayoutProperty(layer, 'visibility', 'visible');
        }
      });
      
      if (mapType === 'prediction') {
        // For prediction mode, adjust line opacity to indicate uncertainty
        ['traffic-low', 'traffic-medium', 'traffic-high', 'traffic-severe'].forEach(layer => {
          if (mapInstance.getLayer(layer)) {
            mapInstance.setPaintProperty(layer, 'line-opacity', 0.7);
          }
        });
      }
    } 
    else if (mapType === 'alerts') {
      // Show only severe traffic layers
      if (mapInstance.getLayer('traffic-high')) {
        mapInstance.setLayoutProperty('traffic-high', 'visibility', 'visible');
      }
      if (mapInstance.getLayer('traffic-severe')) {
        mapInstance.setLayoutProperty('traffic-severe', 'visibility', 'visible');
      }
    }
    else if (mapType === 'heatmap') {
      // Show population heatmap
      if (mapInstance.getLayer('population-heat')) {
        mapInstance.setLayoutProperty('population-heat', 'visibility', 'visible');
      }
      if (mapInstance.getLayer('contour-lines')) {
        mapInstance.setLayoutProperty('contour-lines', 'visibility', 'visible');
      }
    }
  }, [mapType, mapLoaded]);

  // Function to add realistic traffic data as lines
  const addTrafficLines = (mapInstance: mapboxgl.Map, axis: string) => {
    // Generate traffic data for the selected axis
    const trafficData = generateTrafficLineData(axis);
    
    // Add sources for each traffic level
    ['low', 'medium', 'high', 'severe'].forEach(level => {
      const features = trafficData.filter(road => road.properties.trafficLevel === level);
      
      mapInstance.addSource(`traffic-${level}`, {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: features
        } as GeoJSON.FeatureCollection<GeoJSON.Geometry>
      });
      
      // Add line layer for this traffic level
      mapInstance.addLayer({
        id: `traffic-${level}`,
        type: 'line',
        source: `traffic-${level}`,
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': trafficColors[level as keyof typeof trafficColors],
          'line-width': ['interpolate', ['linear'], ['zoom'], 10, 3, 15, 6],
          'line-opacity': 0.9,
          'line-offset': 1
        }
      });
    });
  };

  // Function to generate realistic traffic line data
  const generateTrafficLineData = (axis: string): GeoJSON.Feature<GeoJSON.LineString>[] => {
    const roads: GeoJSON.Feature<GeoJSON.LineString>[] = [];
    
    // Get coordinates for the selected axis
    const axisConfig = axesCoordinates[axis] || axesCoordinates['akpakpa-calavi'];
    
    // Create main route based on predefined coordinates or default coordinates if not available
    const routeCoordinates = axisConfig.routeCoordinates || [
      [2.422, 6.352], // Start point
      [2.400, 6.360],
      [2.382, 6.370],
      [2.360, 6.375],
      [2.340, 6.390],
      [2.325, 6.410]  // End point
    ];
    
    // Divide the main route into segments with varying traffic levels
    for (let i = 0; i < routeCoordinates.length - 1; i++) {
      // Assign traffic level based on position and some randomization
      let trafficLevel: string;
      if (i === Math.floor(routeCoordinates.length / 3)) {
        trafficLevel = 'high';
      } else if (i === Math.floor(routeCoordinates.length * 2 / 3)) {
        trafficLevel = 'severe';
      } else if (i === 0) {
        trafficLevel = 'medium';
      } else {
        trafficLevel = Math.random() > 0.6 ? 'medium' : 'low';
      }
      
      roads.push({
        type: 'Feature',
        properties: {
          trafficLevel: trafficLevel,
          roadName: `Segment ${i+1}`,
          speedKmh: trafficLevel === 'low' ? 60 : 
                   trafficLevel === 'medium' ? 40 :
                   trafficLevel === 'high' ? 20 : 5
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            routeCoordinates[i],
            routeCoordinates[i+1]
          ]
        }
      });
    }
    
    // Add some side roads (perpendicular to main route)
    for (let i = 0; i < Math.min(routeCoordinates.length - 1, 5); i++) {
      const mainIndex = Math.floor((routeCoordinates.length - 1) * i / 5);
      const mainPt = routeCoordinates[mainIndex];
      
      // Get vector direction of the main road segment
      const nextPt = routeCoordinates[mainIndex + 1];
      const dx = nextPt[0] - mainPt[0];
      const dy = nextPt[1] - mainPt[1];
      
      // Perpendicular direction
      const perpX = -dy * 0.01;
      const perpY = dx * 0.01;
      
      // Create side road on one side
      const endPt1: [number, number] = [mainPt[0] + perpX, mainPt[1] + perpY];
      
      // Random traffic level for side roads
      const trafficLevels = ['low', 'medium', 'low', 'medium', 'high'];
      const trafficLevel1 = trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
      
      roads.push({
        type: 'Feature',
        properties: {
          trafficLevel: trafficLevel1,
          roadName: `Side road ${i+1}`,
          speedKmh: trafficLevel1 === 'low' ? 40 : 
                   trafficLevel1 === 'medium' ? 25 : 15
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            mainPt,
            endPt1
          ]
        }
      });
      
      // Create side road on the other side
      const endPt2: [number, number] = [mainPt[0] - perpX, mainPt[1] - perpY];
      const trafficLevel2 = trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
      
      roads.push({
        type: 'Feature',
        properties: {
          trafficLevel: trafficLevel2,
          roadName: `Side road ${i+1}b`,
          speedKmh: trafficLevel2 === 'low' ? 40 : 
                   trafficLevel2 === 'medium' ? 25 : 15
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            mainPt,
            endPt2
          ]
        }
      });
    }
    
    return roads;
  };

  // Function to add simulated population density data
  const addPopulationData = (mapInstance: mapboxgl.Map, axis: string) => {
    // Generate simulated population density points
    const points = generatePopulationData(axis);
    
    // Add source and layer
    mapInstance.addSource('population', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: points
      } as GeoJSON.FeatureCollection<GeoJSON.Geometry>
    });
    
    mapInstance.addLayer({
      id: 'population-heat',
      type: 'heatmap',
      source: 'population',
      layout: {
        'visibility': 'none'
      },
      paint: {
        'heatmap-weight': ['interpolate', ['linear'], ['get', 'density'], 0, 0, 1000, 1],
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 8, 1, 15, 3],
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0, 'rgba(0, 0, 255, 0.5)',   // Blue for low density
          0.3, 'rgba(0, 255, 255, 0.5)', // Cyan
          0.5, 'rgba(0, 255, 0, 0.6)',   // Green
          0.7, 'rgba(255, 255, 0, 0.7)', // Yellow
          0.85, 'rgba(255, 165, 0, 0.8)', // Orange
          1, 'rgba(255, 0, 0, 0.9)'     // Red for high density
        ],
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 8, 15, 15, 30],
        'heatmap-opacity': 0.9
      }
    });
    
    // Add contour lines
    const contourLines = generateContourLines(axis);
    
    mapInstance.addSource('contours', {
      type: 'geojson',
      data: contourLines
    });
    
    mapInstance.addLayer({
      id: 'contour-lines',
      type: 'line',
      source: 'contours',
      layout: {
        'visibility': 'none',
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#ffffff',
        'line-width': 1,
        'line-opacity': 0.6
      }
    });
  };

  // Generate simulated population density data
  const generatePopulationData = (axis: string) => {
    const points: GeoJSON.Feature<GeoJSON.Point>[] = [];
    
    // Get coordinates for the selected axis
    const axisConfig = axesCoordinates[axis] || axesCoordinates['akpakpa-calavi'];
    const center = axisConfig.center;
    
    // Create several population hotspots
    const hotspots: { lng: number; lat: number; strength: number }[] = [];
    
    if (axis === 'akpakpa-calavi') {
      hotspots.push(
        { lng: 2.420, lat: 6.350, strength: 1000 },    // Akpakpa center
        { lng: 2.325, lat: 6.410, strength: 800 },     // Calavi center
        { lng: 2.380, lat: 6.370, strength: 700 },     // Commercial district
        { lng: 2.360, lat: 6.345, strength: 600 },     // Residential area
        { lng: 2.390, lat: 6.390, strength: 750 }      // Another commercial area
      );
    } else if (axis === 'gbedjromede-placodji') {
      hotspots.push(
        { lng: 2.410, lat: 6.365, strength: 900 },     // Gbedjromede
        { lng: 2.395, lat: 6.359, strength: 800 },     // Mid point
        { lng: 2.385, lat: 6.355, strength: 950 }      // Placodji
      );
    } else {
      // For other axes, create hotspots based on the route
      const routeCoords = axisConfig.routeCoordinates || [];
      if (routeCoords.length > 0) {
        // Start point
        hotspots.push({ 
          lng: routeCoords[0][0], 
          lat: routeCoords[0][1], 
          strength: 900 
        });
        
        // Mid point
        const midIdx = Math.floor(routeCoords.length / 2);
        if (routeCoords[midIdx]) {
          hotspots.push({ 
            lng: routeCoords[midIdx][0], 
            lat: routeCoords[midIdx][1], 
            strength: 800 
          });
        }
        
        // End point
        const lastIdx = routeCoords.length - 1;
        if (routeCoords[lastIdx]) {
          hotspots.push({ 
            lng: routeCoords[lastIdx][0], 
            lat: routeCoords[lastIdx][1], 
            strength: 850 
          });
        }
      } else {
        // Fallback for axes without defined routes
        hotspots.push(
          { lng: center[0], lat: center[1], strength: 1000 },                    // Main center
          { lng: center[0] + 0.02, lat: center[1] - 0.01, strength: 800 },       // Secondary center
          { lng: center[0] - 0.01, lat: center[1] + 0.015, strength: 700 }       // Third spot
        );
      }
    }
    
    // Generate points for each hotspot
    hotspots.forEach(hotspot => {
      // Dense points at center
      for (let i = 0; i < 100; i++) {
        const jitter = 0.005;
        const randomLng = hotspot.lng + (Math.random() - 0.5) * jitter;
        const randomLat = hotspot.lat + (Math.random() - 0.5) * jitter;
        
        // Density decreases with distance from center
        const distance = Math.sqrt(
          Math.pow(randomLng - hotspot.lng, 2) + 
          Math.pow(randomLat - hotspot.lat, 2)
        ) / jitter;
        
        const density = hotspot.strength * (1 - Math.min(distance, 1));
        
        points.push({
          type: 'Feature',
          properties: {
            density: density
          },
          geometry: {
            type: 'Point',
            coordinates: [randomLng, randomLat]
          }
        });
      }
      
      // Add more dispersed points around the hotspot
      for (let i = 0; i < 200; i++) {
        const jitter = 0.02;
        const randomLng = hotspot.lng + (Math.random() - 0.5) * jitter;
        const randomLat = hotspot.lat + (Math.random() - 0.5) * jitter;
        
        // Density decreases with distance from center
        const distance = Math.sqrt(
          Math.pow(randomLng - hotspot.lng, 2) + 
          Math.pow(randomLat - hotspot.lat, 2)
        ) / jitter;
        
        const density = hotspot.strength * 0.5 * (1 - Math.min(distance, 1));
        
        points.push({
          type: 'Feature',
          properties: {
            density: density
          },
          geometry: {
            type: 'Point',
            coordinates: [randomLng, randomLat]
          }
        });
      }
    });
    
    return points;
  };
  
  // Generate contour lines for the map
  const generateContourLines = (axis: string) => {
    const axisConfig = axesCoordinates[axis] || axesCoordinates['akpakpa-calavi'];
    const center = axisConfig.center;
    
    const features: GeoJSON.Feature[] = [];
    const contourValues = [1000, 1004, 1008, 1012, 1016, 1020, 1024, 1028, 1032];
    
    contourValues.forEach(value => {
      const radius = 0.02 + (value - 1000) / 1000;
      const points = 36;
      
      const coordinates: [number, number][] = [];
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const jitter = (Math.random() - 0.5) * 0.005;
        const x = center[0] + Math.cos(angle) * radius + jitter;
        const y = center[1] + Math.sin(angle) * radius + jitter;
        coordinates.push([x, y]);
      }
      
      features.push({
        type: 'Feature',
        properties: {
          value: value
        },
        geometry: {
          type: 'LineString',
          coordinates: coordinates
        }
      });
      
      features.push({
        type: 'Feature',
        properties: {
          value: value,
          label: `${value}`
        },
        geometry: {
          type: 'Point',
          coordinates: [center[0] + radius * 0.7, center[1] + radius * 0.3]
        }
      });
    });
    
    return {
      type: 'FeatureCollection',
      features: features
    } as GeoJSON.FeatureCollection;
  };

  return (
    <div className={cn("relative h-full w-full", className)}>
      <div ref={mapContainer} className="absolute inset-0 rounded-md" />
      
      <div className="absolute bottom-4 right-4 text-xs bg-black/70 text-white backdrop-blur-sm px-2 py-1 rounded">
        Axe {selectedAxis.split('-').join(' - ')} - {new Date().toLocaleTimeString()}
      </div>
      
      <div className="absolute bottom-4 left-4 text-xs text-white bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
        UrbanSense - Intelligence urbaine
      </div>
      
      {(mapType === 'traffic' || mapType === 'prediction' || mapType === 'alerts') && (
        <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm p-3 rounded-md shadow-lg">
          <h4 className="text-sm font-medium text-white mb-2">État du trafic</h4>
          <div className="space-y-2">
            {mapType !== 'alerts' && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 rounded-full" style={{ backgroundColor: trafficColors.low }}></div>
                  <span className="text-xs text-white">Fluide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 rounded-full" style={{ backgroundColor: trafficColors.medium }}></div>
                  <span className="text-xs text-white">Modéré</span>
                </div>
              </>
            )}
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 rounded-full" style={{ backgroundColor: trafficColors.high }}></div>
              <span className="text-xs text-white">Dense</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 rounded-full" style={{ backgroundColor: trafficColors.severe }}></div>
              <span className="text-xs text-white">Congestionné</span>
            </div>
          </div>
        </div>
      )}
      
      {mapType === 'heatmap' && (
        <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm p-3 rounded-md shadow-lg">
          <h4 className="text-sm font-medium text-white mb-2">Densité de population</h4>
          <div className="h-32 w-8 relative rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-yellow-500 via-green-500 to-blue-600"></div>
          </div>
          <div className="flex justify-between text-xs mt-1 text-white">
            <span>Élevé</span>
            <span>Faible</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapboxMap;
