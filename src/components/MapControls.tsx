
import React from "react";
import { MapPin, AlertTriangle, ThermometerIcon, Clock, Layers } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface MapControlsProps {
  mapType: "traffic" | "prediction" | "alerts" | "heatmap";
  setMapType: (value: "traffic" | "prediction" | "alerts" | "heatmap") => void;
  selectedAxis: string;
  setSelectedAxis: (value: string) => void;
  enablePrediction?: boolean;
  className?: string;
}

const MapControls = ({ 
  mapType, 
  setMapType, 
  selectedAxis, 
  setSelectedAxis, 
  enablePrediction = true,
  className 
}: MapControlsProps) => {
  return (
    <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${className}`}>
      <div className="w-full lg:w-auto">
        <Select
          value={selectedAxis}
          onValueChange={setSelectedAxis}
        >
          <SelectTrigger className="w-full lg:w-[220px]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <SelectValue placeholder="Sélectionner un axe" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="akpakpa-calavi">Akpakpa - Calavi</SelectItem>
            <SelectItem value="godomey-cotonou-centre">Godomey - Cotonou Centre</SelectItem>
            <SelectItem value="agla-cadjehoun">Agla - Cadjehoun</SelectItem>
            <SelectItem value="ainouko-fidjrosse">Ainouko - Fidjrossè</SelectItem>
            <SelectItem value="gbedjromede-placodji">Gbedjromede - Placodji</SelectItem>
            <SelectItem value="agla-dantokpa">Agla - Dantokpa</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
        <Tabs 
          value={mapType} 
          onValueChange={(v) => setMapType(v as any)} 
          className="w-full sm:w-auto"
        >
          <TabsList className={`grid ${enablePrediction ? 'grid-cols-4' : 'grid-cols-3'} w-full md:w-auto`}>
            <TabsTrigger value="traffic" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Trafic actuel</span>
            </TabsTrigger>
            {enablePrediction && (
              <TabsTrigger value="prediction" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Prédiction (30min)</span>
              </TabsTrigger>
            )}
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Alertes</span>
            </TabsTrigger>
            <TabsTrigger value="heatmap" className="flex items-center gap-2">
              <ThermometerIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Affluence</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="sm:hidden w-full">
          <Select 
            value={mapType} 
            onValueChange={(value) => setMapType(value as any)}
          >
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <SelectValue placeholder="Type de carte" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="traffic">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Trafic routier</span>
                </div>
              </SelectItem>
              {enablePrediction && (
                <SelectItem value="prediction">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Prédiction trafic</span>
                  </div>
                </SelectItem>
              )}
              <SelectItem value="alerts">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Alertes</span>
                </div>
              </SelectItem>
              <SelectItem value="heatmap">
                <div className="flex items-center gap-2">
                  <ThermometerIcon className="h-4 w-4" />
                  <span>Carte d'affluence</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
