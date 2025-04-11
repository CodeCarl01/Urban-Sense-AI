
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Activity, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProfileCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
}

const ProfileCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  isActive,
  onClick 
}: ProfileCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 border transition-all cursor-pointer hover:shadow-lg",
        isActive ? "border-urban-blue shadow-urban" : "border-gray-200"
      )}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "p-2 rounded-full mr-3",
          isActive ? "bg-urban-blue text-white" : "bg-gray-100 text-urban-gray"
        )}>
          {icon}
        </div>
        <h3 className={cn(
          "text-xl font-semibold",
          isActive ? "text-urban-blue" : "text-urban-gray"
        )}>{title}</h3>
      </div>
      
      <p className="text-urban-gray mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full mr-2",
              isActive ? "bg-urban-blue" : "bg-gray-400"
            )}></div>
            <span className="text-sm text-urban-gray">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const ProfileSelection = () => {
  const [activeProfile, setActiveProfile] = useState<string>("citizen");

  const profiles = [
    {
      id: "citizen",
      icon: <User size={20} />,
      title: "Citoyens",
      description: "Optimisez vos trajets quotidiens et évitez les embouteillages.",
      features: [
        "Itinéraires optimisés en temps réel",
        "Prédiction de trafic à 30 minutes",
        "Alertes de congestion personnalisées",
        "Interface simplifiée"
      ],
      path: "/citizen"
    },
    {
      id: "urbanist",
      icon: <Activity size={20} />,
      title: "Urbanistes",
      description: "Analysez les données de mobilité pour mieux planifier la ville.",
      features: [
        "Outils d'analyse spatiale avancés",
        "Cartographie dynamique multi-couches",
        "Export de données pour études",
        "Historique des tendances"
      ],
      path: "/urbanist"
    },
    {
      id: "authority",
      icon: <Building2 size={20} />,
      title: "Autorités",
      description: "Surveillez et gérez en temps réel les flux urbains.",
      features: [
        "Vue macroscopique de la ville",
        "Alertes automatiques d'incidents",
        "Module de sécurité beta",
        "Tableau de bord analytique"
      ],
      path: "/authority"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10 lg:px-20" id="profiles">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h5 className="text-urban-green font-medium mb-2">Plateformes Personnalisées</h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-urban-blue">
          Une solution adaptée à chaque besoin
        </h2>
        <p className="text-urban-gray">
          UrbanSense propose une interface unique adaptée à différents types d'utilisateurs, chacun 
          avec ses outils et fonctionnalités spécifiques.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            icon={profile.icon}
            title={profile.title}
            description={profile.description}
            features={profile.features}
            isActive={activeProfile === profile.id}
            onClick={() => setActiveProfile(profile.id)}
          />
        ))}
      </div>
      
      <div className="text-center">
        <Link to={profiles.find(p => p.id === activeProfile)?.path || "/"}>
          <Button className="bg-urban-blue hover:bg-urban-blue/90 text-white px-8">
            Explorer l'interface {activeProfile === "citizen" ? "Citoyen" : 
                              activeProfile === "urbanist" ? "Urbaniste" : "Autorité"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSelection;
