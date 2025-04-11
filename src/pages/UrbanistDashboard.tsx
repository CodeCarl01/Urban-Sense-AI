
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, LineChart, BarChart3, Upload, Save } from "lucide-react";
import MapboxMap from "@/components/MapboxMap";
import MapControls from "@/components/MapControls";
import MapLegend from "@/components/MapLegend";
import MapStatus from "@/components/MapStatus";
import MetricsDisplay from "@/components/MetricsDisplay";
import DashboardLayout from "@/components/DashboardLayout";

const UrbanistDashboard = () => {
  const [mapType, setMapType] = useState<"traffic" | "prediction" | "alerts" | "heatmap">("traffic");
  const [selectedAxis, setSelectedAxis] = useState<string>("calavi-cotonou");

  return (
    <DashboardLayout 
      title="Dashboard Urbaniste"
      subtitle="Analysez et optimisez le réseau urbain de Cotonou"
      userType="urbanist"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <Card className="lg:col-span-3 p-6 border-0 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h3 className="text-xl font-semibold text-urban-blue">Cartographie avancée</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Exporter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Upload className="h-4 w-4" />
                Importer
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
          </div>
          
          <MapControls 
            mapType={mapType} 
            setMapType={setMapType} 
            selectedAxis={selectedAxis} 
            setSelectedAxis={setSelectedAxis} 
          />
          
          <MetricsDisplay
            selectedAxis={selectedAxis}
            mapType={mapType}
            userType="urbanist"
          />
          
          <div className="relative h-[450px] rounded-md overflow-hidden mt-4">
            <MapboxMap mapType={mapType} selectedAxis={selectedAxis} />
            <MapLegend mapType={mapType} />
            <MapStatus mapType={mapType} />
          </div>
        </Card>
        
        <div className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl font-semibold text-urban-blue mb-4">Simulation</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-urban-gray mb-1">
                  Type de simulation
                </label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option value="roadClosure">Fermeture de route</option>
                  <option value="newRoad">Nouvelle route</option>
                  <option value="roadExpansion">Élargissement d'axe</option>
                  <option value="trafficLights">Optimisation feux</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-urban-gray mb-1">
                  Durée
                </label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option value="1h">1 heure</option>
                  <option value="3h">3 heures</option>
                  <option value="12h">12 heures</option>
                  <option value="24h">24 heures</option>
                  <option value="permanent">Permanent</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-urban-gray mb-1">
                  Début
                </label>
                <input type="datetime-local" className="w-full border rounded-md p-2 text-sm" />
              </div>
              
              <Button className="w-full bg-urban-blue hover:bg-urban-blue/90">
                Lancer la simulation
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl font-semibold text-urban-blue mb-4">Analyses</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full flex items-center justify-between">
                <span>Rapport de congestion</span>
                <BarChart3 className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="w-full flex items-center justify-between">
                <span>Analyse tendancielle</span>
                <LineChart className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="w-full flex items-center justify-between">
                <span>Performance des feux</span>
                <LineChart className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl font-semibold text-urban-blue mb-4">Recommandations</h3>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-md border-l-4 border-urban-blue">
              <p className="font-medium">Élargissement recommandé</p>
              <p className="text-sm text-urban-gray mt-1">Axe Calavi-Cotonou km 8-10</p>
              <p className="text-sm text-urban-gray mt-1">Gain estimé: -15 min de trajet</p>
              <Button variant="link" className="text-urban-blue p-0 h-auto text-sm mt-2">
                Voir la simulation
              </Button>
            </div>
            
            <div className="p-3 bg-green-50 rounded-md border-l-4 border-urban-green">
              <p className="font-medium">Optimisation des feux tricolores</p>
              <p className="text-sm text-urban-gray mt-1">Carrefour Aéroport</p>
              <p className="text-sm text-urban-gray mt-1">Gain estimé: -5 min de trajet</p>
              <Button variant="link" className="text-urban-blue p-0 h-auto text-sm mt-2">
                Voir la simulation
              </Button>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-md border-l-4 border-urban-yellow">
              <p className="font-medium">Création d'un nouvel axe</p>
              <p className="text-sm text-urban-gray mt-1">Jonction Fidjrossè - Akpakpa</p>
              <p className="text-sm text-urban-gray mt-1">Réduction trafic estimée: 30%</p>
              <Button variant="link" className="text-urban-blue p-0 h-auto text-sm mt-2">
                Voir la simulation
              </Button>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl font-semibold text-urban-blue mb-4">Planification d'événements</h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">Festival de la Gastronomie</p>
                <p className="text-sm text-urban-blue">15/07/2025</p>
              </div>
              <p className="text-sm text-urban-gray mt-1">Lieu: Place des Martyrs</p>
              <p className="text-sm text-urban-gray mt-1">Impact estimé: Fort (8,000 personnes)</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">Analyser</Button>
                <Button variant="outline" size="sm">Planifier</Button>
              </div>
            </div>
            
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">Marathon de Cotonou</p>
                <p className="text-sm text-urban-blue">28/08/2025</p>
              </div>
              <p className="text-sm text-urban-gray mt-1">Parcours: Centre-ville</p>
              <p className="text-sm text-urban-gray mt-1">Impact estimé: Très fort (fermeture axes)</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">Analyser</Button>
                <Button variant="outline" size="sm">Planifier</Button>
              </div>
            </div>
            
            <Button className="w-full">Ajouter un événement</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UrbanistDashboard;
