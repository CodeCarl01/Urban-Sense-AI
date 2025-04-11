
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import MapboxMap from "./MapboxMap";
import MapControls from "./MapControls";
import MapLegend from "./MapLegend";
import MapStatus from "./MapStatus";

const MapView = () => {
  const [mapType, setMapType] = useState<"traffic" | "prediction" | "alerts" | "heatmap">("traffic");
  const [selectedAxis, setSelectedAxis] = useState<string>("calavi-cotonou");
  
  return (
    <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-blue-50 to-gray-50" id="demo">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h5 className="text-urban-green font-medium mb-2 animate-fade-in">Cartographie Interactive</h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-urban-blue animate-fade-in">
          Visualisez les données urbaines en temps réel
        </h2>
        <p className="text-urban-gray max-w-2xl mx-auto animate-fade-in">
          Notre interface cartographique avancée permet de visualiser la congestion routière,
          de prévoir les embouteillages à venir et d'identifier les zones à risque avec une précision de 85%.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-urban animate-scale-in">
          <div className="p-4 bg-white border-b">
            <MapControls 
              mapType={mapType}
              setMapType={setMapType}
              selectedAxis={selectedAxis}
              setSelectedAxis={setSelectedAxis}
            />
          </div>
          
          <div className="relative h-[450px] md:h-[550px]">
            <MapboxMap mapType={mapType} selectedAxis={selectedAxis} />
            <MapLegend mapType={mapType} />
            <MapStatus mapType={mapType} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MapView;
