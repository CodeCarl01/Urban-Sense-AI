
import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart3, Clock, Calendar, AlertTriangle, Users } from "lucide-react";

interface MetricProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: React.ReactNode;
}

const Metric = ({ title, value, change, isPositive = true, icon }: MetricProps) => (
  <Card className="p-4 border-0 shadow-md">
    <div className="flex items-center justify-between mb-2">
      <span className="text-urban-gray text-sm font-medium">{title}</span>
      <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-urban-blue">{value}</span>
      {change && (
        <span className={`text-sm font-medium ${isPositive ? 'text-urban-green' : 'text-urban-red'}`}>
          {change}
        </span>
      )}
    </div>
  </Card>
);

interface MetricsDisplayProps {
  selectedAxis: string;
  mapType?: "traffic" | "prediction" | "alerts" | "heatmap";
  userType?: "citizen" | "urbanist" | "authority";
}

const MetricsDisplay = ({ selectedAxis, mapType, userType = "urbanist" }: MetricsDisplayProps) => {
  // These would be dynamic in a real application based on API data
  const getTrafficMetrics = () => {
    if (selectedAxis === "calavi-cotonou") {
      return {
        currentTime: "42 min",
        optimalTime: "22 min",
        congestion: "Élevée",
        isPositive: false,
        change: "+20 min"
      };
    } else if (selectedAxis === "port-cotonou") {
      return {
        currentTime: "25 min",
        optimalTime: "12 min",
        congestion: "Modérée",
        isPositive: false,
        change: "+13 min"
      };
    }
    return {
      currentTime: "18 min",
      optimalTime: "14 min",
      congestion: "Faible",
      isPositive: true,
      change: "+4 min"
    };
  };

  const getAffluenceMetrics = () => {
    if (selectedAxis === "calavi-cotonou" || selectedAxis === "dantokpa-cotonou") {
      return {
        density: "Très élevée",
        peopleCount: "~12,500",
        trend: "+15%",
        isPositive: false
      };
    } else if (selectedAxis === "port-cotonou") {
      return {
        density: "Élevée",
        peopleCount: "~8,200",
        trend: "+8%",
        isPositive: false
      };
    }
    return {
      density: "Modérée",
      peopleCount: "~3,800",
      trend: "-5%",
      isPositive: true
    };
  };

  const trafficMetrics = getTrafficMetrics();
  const affluenceMetrics = getAffluenceMetrics();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {(mapType === "traffic" || mapType === "prediction" || !mapType) && (
        <>
          <Metric
            title="Temps de trajet actuel"
            value={trafficMetrics.currentTime}
            change={trafficMetrics.change}
            isPositive={trafficMetrics.isPositive}
            icon={<Clock className="h-5 w-5 text-urban-blue" />}
          />
          <Metric
            title="Temps de trajet optimal"
            value={trafficMetrics.optimalTime}
            icon={<Clock className="h-5 w-5 text-urban-green" />}
          />
          {userType !== "citizen" && (
            <>
              <Metric
                title="Incidents aujourd'hui"
                value="3"
                change="-25%"
                isPositive={true}
                icon={<AlertTriangle className="h-5 w-5 text-urban-yellow" />}
              />
              <Metric
                title="Débit horaire"
                value="1,250"
                change="+8%"
                isPositive={false}
                icon={<BarChart3 className="h-5 w-5 text-urban-blue" />}
              />
            </>
          )}
          {userType === "citizen" && (
            <>
              <Metric
                title="Niveau de congestion"
                value={trafficMetrics.congestion}
                icon={<BarChart3 className="h-5 w-5 text-urban-red" />}
              />
              <Metric
                title="Prochaine alerte"
                value="15h30"
                change="Dans 45 min"
                isPositive={true}
                icon={<Calendar className="h-5 w-5 text-urban-blue" />}
              />
            </>
          )}
        </>
      )}

      {mapType === "heatmap" && (
        <>
          <Metric
            title="Densité de population"
            value={affluenceMetrics.density}
            icon={<Users className="h-5 w-5 text-urban-blue" />}
          />
          <Metric
            title="Nombre de personnes"
            value={affluenceMetrics.peopleCount}
            change={affluenceMetrics.trend}
            isPositive={affluenceMetrics.isPositive}
            icon={<Users className="h-5 w-5 text-urban-blue" />}
          />
          {userType !== "citizen" && (
            <>
              <Metric
                title="Capacité zone"
                value="85%"
                change="+10%"
                isPositive={false}
                icon={<Users className="h-5 w-5 text-urban-yellow" />}
              />
              <Metric
                title="Niveau d'alerte"
                value="Normal"
                icon={<AlertTriangle className="h-5 w-5 text-urban-green" />}
              />
            </>
          )}
          {userType === "citizen" && (
            <>
              <Metric
                title="Tendance"
                value={affluenceMetrics.isPositive ? "En baisse" : "En hausse"}
                icon={<BarChart3 className="h-5 w-5 text-urban-blue" />}
              />
              <Metric
                title="Pic d'affluence"
                value="17h30"
                change="Dans 2h"
                isPositive={true}
                icon={<Clock className="h-5 w-5 text-urban-yellow" />}
              />
            </>
          )}
        </>
      )}

      {mapType === "alerts" && (
        <>
          <Metric
            title="Alertes actives"
            value="3"
            icon={<AlertTriangle className="h-5 w-5 text-urban-red" />}
          />
          <Metric
            title="Dernière alerte"
            value="14:45"
            change="Il y a 15 min"
            isPositive={true}
            icon={<Clock className="h-5 w-5 text-urban-blue" />}
          />
          <Metric
            title="Type d'incident"
            value="Accident"
            icon={<AlertTriangle className="h-5 w-5 text-urban-red" />}
          />
          <Metric
            title="Impact estimé"
            value="35 min"
            change="+15 min"
            isPositive={false}
            icon={<Clock className="h-5 w-5 text-urban-red" />}
          />
        </>
      )}
    </div>
  );
};

export default MetricsDisplay;
