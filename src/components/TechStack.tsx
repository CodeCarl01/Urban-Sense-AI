
import React from "react";
import { Card } from "@/components/ui/card";
import { Database, Brain, BarChart, Signal, Globe, LineChart } from "lucide-react";

interface TechStackItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechStackItem = ({ icon, title, description }: TechStackItemProps) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-blue-100 p-3 rounded-lg mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg text-urban-blue">{title}</h4>
        <p className="text-urban-gray">{description}</p>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white" id="tech-stack">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h5 className="text-urban-green font-medium mb-2">Notre Technologie</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-urban-blue">
            Une approche innovante et adaptée
          </h2>
          <p className="text-urban-gray">
            Notre solution s'appuie sur des technologies de pointe, optimisées pour le contexte africain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-urban-blue">Architecture technique</h3>
            <div className="space-y-6">
              <TechStackItem
                icon={<Database className="h-6 w-6 text-urban-blue" />}
                title="Collecte de données"
                description="Capteurs IoT low-cost et crowdsourcing via application mobile pour une couverture optimale."
              />
              <TechStackItem
                icon={<Brain className="h-6 w-6 text-urban-blue" />}
                title="IA prédictive"
                description="Algorithmes d'apprentissage automatique adaptés aux modèles de trafic locaux."
              />
              <TechStackItem
                icon={<BarChart className="h-6 w-6 text-urban-blue" />}
                title="Analyse en temps réel"
                description="Traitement des données en temps réel pour des informations toujours à jour."
              />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-urban-blue">Points forts techniques</h3>
            <div className="space-y-6">
              <TechStackItem
                icon={<Signal className="h-6 w-6 text-urban-blue" />}
                title="Faible consommation de données"
                description="Optimisé pour les réseaux à bande passante limitée et les appareils d'entrée de gamme."
              />
              <TechStackItem
                icon={<Globe className="h-6 w-6 text-urban-blue" />}
                title="Mode hors-ligne"
                description="Fonctionnalités essentielles disponibles même sans connexion internet continue."
              />
              <TechStackItem
                icon={<LineChart className="h-6 w-6 text-urban-blue" />}
                title="API ouverte"
                description="Permet l'intégration avec d'autres services et le développement d'extensions par des tiers."
              />
            </div>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-urban-blue text-center">Spécifications techniques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-urban-blue">5min</p>
              <p className="text-sm text-urban-gray">Fréquence de mise à jour</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-urban-blue">30min</p>
              <p className="text-sm text-urban-gray">Fenêtre de prédiction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-urban-blue">85%</p>
              <p className="text-sm text-urban-gray">Précision prédictive</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-urban-blue">&lt;3MB</p>
              <p className="text-sm text-urban-gray">Taille de l'application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
