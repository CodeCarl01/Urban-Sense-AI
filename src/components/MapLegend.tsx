
import React from 'react';
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

interface MapLegendProps {
  mapType: "traffic" | "prediction" | "alerts" | "heatmap";
}

const MapLegend = ({ mapType }: MapLegendProps) => {
  return (
    <Card className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-md shadow-md">
      <h4 className="text-sm font-medium text-urban-gray mb-2 flex items-center">
        <Info className="h-4 w-4 mr-1" />
        {mapType === 'heatmap' ? 'Densité de population' : 'Intensité du trafic'}
      </h4>
      {mapType !== 'heatmap' ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-urban-red"></div>
            <span className="text-xs text-urban-gray">Fort</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-urban-yellow"></div>
            <span className="text-xs text-urban-gray">Modéré</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-urban-green"></div>
            <span className="text-xs text-urban-gray">Fluide</span>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <span className="text-xs text-urban-gray">Très dense</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs text-urban-gray">Dense</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-urban-gray">Modéré</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="text-xs text-urban-gray">Faible</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MapLegend;
