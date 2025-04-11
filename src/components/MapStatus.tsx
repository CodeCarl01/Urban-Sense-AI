
import React from 'react';
import { Card } from "@/components/ui/card";

interface MapStatusProps {
  mapType: "traffic" | "prediction" | "alerts" | "heatmap";
}

const MapStatus = ({ mapType }: MapStatusProps) => {
  return (
    <Card className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-md shadow-md">
      {mapType === "traffic" && (
        <div className="text-sm">
          <p className="font-medium text-urban-gray">Trafic en temps réel</p>
          <p className="text-xs text-urban-gray/80">Mis à jour il y a 2 min</p>
        </div>
      )}
      {mapType === "prediction" && (
        <div className="text-sm">
          <p className="font-medium text-urban-gray">Prédiction à 30 min</p>
          <p className="text-xs text-urban-gray/80">Précision: 85%</p>
        </div>
      )}
      {mapType === "alerts" && (
        <div className="text-sm">
          <p className="font-medium text-urban-red">Alertes actives: 3</p>
          <p className="text-xs text-urban-gray/80">Dernière: il y a 15 min</p>
        </div>
      )}
      {mapType === "heatmap" && (
        <div className="text-sm">
          <p className="font-medium text-urban-blue">Carte d'affluence</p>
          <p className="text-xs text-urban-gray/80">Données démographiques</p>
        </div>
      )}
    </Card>
  );
};

export default MapStatus;
