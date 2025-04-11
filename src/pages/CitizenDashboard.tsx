
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation, Bell, Info, Bike, Send, History, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import MapboxMap from "@/components/MapboxMap";
import MapControls from "@/components/MapControls";
import MapLegend from "@/components/MapLegend";
import MapStatus from "@/components/MapStatus";
import MetricsDisplay from "@/components/MetricsDisplay";
import DashboardLayout from "@/components/DashboardLayout";

const CitizenDashboard = () => {
  const [mapType, setMapType] = useState<"traffic" | "prediction" | "alerts" | "heatmap">("traffic");
  const [selectedAxis, setSelectedAxis] = useState<string>("calavi-cotonou");

  return (
    <DashboardLayout 
      title="Bienvenue, Utilisateur Citoyen"
      subtitle="Optimisez vos déplacements quotidiens avec UrbanSense"
      userType="citizen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center mb-4">
            <Navigation className="h-6 w-6 text-urban-blue mr-2" />
            <h3 className="text-xl font-semibold text-urban-blue">Mon Trajet</h3>
          </div>
          <div className="mb-4">
            <div className="bg-gray-100 p-3 rounded-md mb-2">
              <p className="text-sm text-urban-gray">Départ</p>
              <p className="font-medium">Calavi, Carrefour Togoudo</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="text-sm text-urban-gray">Arrivée</p>
              <p className="font-medium">Cotonou, Cadjehoun</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-urban-gray">Temps estimé</p>
              <p className="text-2xl font-bold text-urban-red">42 min</p>
            </div>
            <Button className="bg-urban-green hover:bg-urban-green/90">Démarrer</Button>
          </div>
        </Card>
        
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-urban-blue mr-2" />
            <h3 className="text-xl font-semibold text-urban-blue">Mes Alertes</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded-md border-l-4 border-urban-red">
              <p className="font-medium">Accident sur le pont de Cotonou</p>
              <p className="text-sm text-urban-gray">Il y a 15 minutes • Voie Nord bloquée</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-md border-l-4 border-urban-yellow">
              <p className="font-medium">Trafic dense prévu sur votre trajet</p>
              <p className="text-sm text-urban-gray">Aujourd'hui à 17:30 • +25min</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
              <p className="font-medium">Alerte pluie sur votre zone</p>
              <p className="text-sm text-urban-gray">Dans 45 minutes • Risque d'inondation</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center mb-4">
            <Bike className="h-6 w-6 text-urban-blue mr-2" />
            <h3 className="text-xl font-semibold text-urban-blue">Conseils Mobilité</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded-md border-l-4 border-urban-green">
              <p className="font-medium">Itinéraire alternatif recommandé</p>
              <p className="text-sm text-urban-gray">Via Fidjrossè • 8min plus rapide</p>
              <Button variant="link" className="text-urban-blue p-0 h-auto text-sm">
                Voir l'itinéraire
              </Button>
            </div>
            <div className="bg-purple-50 p-3 rounded-md border-l-4 border-purple-500">
              <p className="font-medium">Zem disponible à proximité</p>
              <p className="text-sm text-urban-gray">5 conducteurs • 3min d'attente</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Send className="h-4 w-4" />
                Signaler un incident
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <History className="h-4 w-4" />
                Historique
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h3 className="text-xl font-semibold text-urban-blue">Carte en temps réel</h3>
          <MapControls 
            mapType={mapType} 
            setMapType={setMapType} 
            selectedAxis={selectedAxis} 
            setSelectedAxis={setSelectedAxis} 
            enablePrediction={false}
          />
        </div>
        
        <MetricsDisplay
          selectedAxis={selectedAxis}
          mapType={mapType}
          userType="citizen"
        />
        
        <div className="relative h-96 rounded-md overflow-hidden mt-4">
          <MapboxMap mapType={mapType} selectedAxis={selectedAxis} />
          <MapLegend mapType={mapType} />
          <MapStatus mapType={mapType} />
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-urban-gray flex items-center">
            <Info className="h-3 w-3 mr-1" />
            Les prédictions avancées sont réservées aux urbanistes
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-urban-blue mb-4">Conseils pour votre journée</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-md">
            <h4 className="font-medium mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-urban-blue" />
              Heures de départ recommandées
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Matin</span>
                <span className="font-medium text-urban-green">6h30 - 7h00</span>
              </div>
              <div className="flex justify-between">
                <span>Midi</span>
                <span className="font-medium text-urban-yellow">12h30 - 13h30</span>
              </div>
              <div className="flex justify-between">
                <span>Soir</span>
                <span className="font-medium text-urban-red">17h00 - 19h00</span>
              </div>
              <p className="text-sm text-urban-gray mt-2">
                Évitez de partir entre 7h30-9h00 et 16h30-18h30 pour minimiser votre temps de trajet.
              </p>
            </div>
          </div>
          <div className="border p-4 rounded-md">
            <h4 className="font-medium mb-2 flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-urban-blue" />
              Événements à proximité
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Marché Dantokpa</p>
                <p className="text-sm text-urban-gray">Grande affluence prévue • 9h00 - 17h00</p>
              </div>
              <div>
                <p className="font-medium">Travaux routiers</p>
                <p className="text-sm text-urban-gray">Route des Pêches • Jusqu'au 15/06/2025</p>
              </div>
              <div className="pt-2">
                <Button variant="link" className="text-urban-blue p-0 h-auto text-sm">
                  Voir tous les événements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CitizenDashboard;
