
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Settings, Video, Radio, Megaphone, Siren, Cctv, CheckCircle, X, Eye } from "lucide-react";
import MapboxMap from "@/components/MapboxMap";
import MapControls from "@/components/MapControls";
import MapLegend from "@/components/MapLegend";
import MapStatus from "@/components/MapStatus";
import MetricsDisplay from "@/components/MetricsDisplay";
import DashboardLayout from "@/components/DashboardLayout";

const AuthorityDashboard = () => {
  const [mapType, setMapType] = useState<"traffic" | "prediction" | "alerts" | "heatmap">("traffic");
  const [selectedAxis, setSelectedAxis] = useState<string>("calavi-cotonou");
  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 1,
      type: "Accident",
      location: "Pont de Cotonou",
      time: "14:45",
      severity: "high",
      status: "active",
    },
    {
      id: 2,
      type: "Inondation",
      location: "Fidjrossè",
      time: "15:10",
      severity: "medium",
      status: "active",
    },
    {
      id: 3,
      type: "Manifestation",
      location: "Place des Martyrs",
      time: "13:25",
      severity: "medium",
      status: "active",
    }
  ]);

  const handleResolveIncident = (id: number) => {
    setActiveIncidents(activeIncidents.filter(incident => incident.id !== id));
  };

  return (
    <DashboardLayout 
      title="Centre de Contrôle Sécurité"
      subtitle="Surveillance et gestion en temps réel des incidents urbains"
      userType="authority"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 p-6 border-0 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-urban-red mr-2" />
              <h3 className="text-xl font-semibold text-urban-blue">Surveillance en temps réel</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="destructive" className="bg-urban-red hover:bg-urban-red/90 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Centre d'alerte
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Configuration
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
            userType="authority"
          />
          
          <div className="relative h-[450px] rounded-md overflow-hidden mt-4">
            <MapboxMap mapType={mapType} selectedAxis={selectedAxis} />
            <MapLegend mapType={mapType} />
            <MapStatus mapType={mapType} />
          </div>
        </Card>
        
        <div className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-urban-red flex items-center">
                <AlertTriangle className="h-5 w-5 mr-1" />
                Incidents actifs
              </h3>
              <Button size="sm" variant="outline">Historique</Button>
            </div>
            
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {activeIncidents.map(incident => (
                <div 
                  key={incident.id} 
                  className={`p-3 rounded-md border-l-4 ${
                    incident.severity === 'high' ? 'bg-red-50 border-urban-red' : 
                    incident.severity === 'medium' ? 'bg-yellow-50 border-urban-yellow' : 
                    'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{incident.type}</p>
                      <p className="text-sm text-urban-gray">{incident.location} • {incident.time}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-7 w-7">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7 text-green-600" 
                        onClick={() => handleResolveIncident(incident.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {activeIncidents.length === 0 && (
                <div className="text-center p-4 text-urban-gray">
                  <p>Aucun incident actif</p>
                </div>
              )}
            </div>
            
            <Button className="w-full mt-4 bg-urban-red hover:bg-urban-red/90">
              Déclarer un nouvel incident
            </Button>
          </Card>
          
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-lg font-semibold text-urban-blue mb-4">Centre de contrôle</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-auto">
                <Video className="h-6 w-6 mb-2" />
                <span className="text-sm">Vidéosurveillance</span>
              </Button>
              
              <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-auto">
                <Radio className="h-6 w-6 mb-2" />
                <span className="text-sm">Communication</span>
              </Button>
              
              <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-auto">
                <Megaphone className="h-6 w-6 mb-2" />
                <span className="text-sm">Annonces</span>
              </Button>
              
              <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-auto">
                <Siren className="h-6 w-6 mb-2" />
                <span className="text-sm">Sirènes</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-urban-blue mb-4 flex items-center">
            <Cctv className="h-5 w-5 mr-2" />
            Points de surveillance
          </h3>
          
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Caméra P001 - Pont de Cotonou</p>
              <p className="text-sm text-urban-gray">Status: En ligne • Dernière vérification: 15:20</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Caméra P002 - Carrefour Akpakpa</p>
              <p className="text-sm text-urban-gray">Status: En ligne • Dernière vérification: 15:18</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer border-l-4 border-urban-red">
              <p className="font-medium">Caméra P003 - Marché Dantokpa</p>
              <p className="text-sm text-urban-red">Status: Alerte détectée à 15:15</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Caméra P004 - Port de Cotonou</p>
              <p className="text-sm text-urban-gray">Status: En ligne • Dernière vérification: 15:16</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Caméra P005 - Stade de l'Amitié</p>
              <p className="text-sm text-urban-gray">Status: En ligne • Dernière vérification: 15:14</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-0 shadow-md md:col-span-2">
          <h3 className="text-lg font-semibold text-urban-blue mb-4">Gestion des interventions</h3>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium">Équipe Alpha</p>
                  </div>
                  <p className="text-sm text-urban-gray">Position: Carrefour Akpakpa</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Contacter</Button>
                  <Button size="sm" variant="outline">Affecter</Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium">Équipe Bravo</p>
                  </div>
                  <p className="text-sm text-urban-gray">Position: Pont de Cotonou</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Contacter</Button>
                  <Button size="sm" variant="outline">Affecter</Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                    <p className="font-medium">Équipe Charlie</p>
                  </div>
                  <p className="text-sm text-urban-gray">Position: En intervention (Fidjrossè)</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Contacter</Button>
                  <Button size="sm" variant="outline" disabled>Affecter</Button>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                    <p className="font-medium">Équipe Delta</p>
                  </div>
                  <p className="text-sm text-urban-gray">Position: Indisponible jusqu'à 16:30</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Contacter</Button>
                  <Button size="sm" variant="outline" disabled>Affecter</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AuthorityDashboard;
