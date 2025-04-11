
import React from "react";
import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import ProfileSelection from "@/components/ProfileSelection";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TechStack from "@/components/TechStack";
import { Map, Clock, BarChart4, Bell, ShieldCheck, ArrowRight, MapPin, BarChart3, LineChart, Activity, Settings, Award, TrendingUp, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#080d20] to-[#121b3c]">
      <Navbar />
      
      <main>
        <LandingHero />
        
        {/* Problem Solution Statement */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-[#0f1729] to-[#1a2a4a] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h5 className="text-urban-green font-medium mb-2">Pourquoi UrbanSense?</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le défi de la mobilité urbaine en Afrique de l'Ouest
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Dans les villes comme Cotonou, les citoyens perdent jusqu'à 2 heures par jour dans les embouteillages, 
                entraînant des pertes économiques et une diminution de la qualité de vie.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Le problème</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-red-900/40 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Congestion extrême</h4>
                      <p className="text-gray-300">Les axes principaux comme Akpakpa-Calavi sont régulièrement bloqués pendant des heures.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-red-900/40 p-2 rounded-full mt-1">
                      <BarChart3 className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Manque de données</h4>
                      <p className="text-gray-300">Les autorités n'ont pas de vision claire des flux urbains pour prendre des décisions éclairées.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-red-900/40 p-2 rounded-full mt-1">
                      <Bell className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Communication déficiente</h4>
                      <p className="text-gray-300">Les usagers ne sont pas informés des incidents ou des alternatives disponibles.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Notre solution</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-green-900/40 p-2 rounded-full mt-1">
                      <Map className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Cartographie intelligente</h4>
                      <p className="text-gray-300">Analyse en temps réel des flux de trafic avec une précision de 85%.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-green-900/40 p-2 rounded-full mt-1">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Prédiction avancée</h4>
                      <p className="text-gray-300">Anticipation des embouteillages jusqu'à 30 minutes à l'avance.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-green-900/40 p-2 rounded-full mt-1">
                      <Target className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Solutions adaptées</h4>
                      <p className="text-gray-300">Interface personnalisée pour chaque type d'utilisateur: citoyens, urbanistes, autorités.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-[#0a1022] text-white" id="features">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h5 className="text-urban-green font-medium mb-2">Fonctionnalités Clés</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligence urbaine au service de la mobilité
            </h2>
            <p className="text-gray-300">
              UrbanSense combine données en temps réel, analyse prédictive et visualisation 
              avancée pour optimiser les déplacements urbains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Map size={28} />}
              title="Cartographie en temps réel"
              description="Visualisez la densité du trafic et les zones de congestion avec une mise à jour toutes les 5 minutes."
            />
            <FeatureCard 
              icon={<Clock size={28} />}
              title="Moteur de prédiction"
              description="Anticipez les embouteillages grâce à notre algorithme prédictif avec une précision de plus de 85%."
            />
            <FeatureCard 
              icon={<BarChart4 size={28} />}
              title="Analyse des données"
              description="Exploitez les données historiques pour comprendre les tendances et adapter les infrastructures."
            />
            <FeatureCard 
              icon={<Bell size={28} />}
              title="Alertes personnalisées"
              description="Recevez des notifications en cas d'incidents ou de ralentissements sur vos trajets habituels."
            />
            <FeatureCard 
              icon={<ShieldCheck size={28} />}
              title="Module de sécurité"
              description="Identifiez les zones à risque et améliorez la sécurité urbaine grâce à l'analyse prédictive."
            />
            <FeatureCard 
              icon={<Settings size={28} />}
              title="Optimisation des feux tricolores"
              description="Ajustement intelligent des cycles de signalisation pour un trafic fluide et optimisé."
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Axes Section */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-[#0f1729]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h5 className="text-urban-green font-medium mb-2">Axes Principaux</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Couvrez tous les grands axes de Cotonou
            </h2>
            <p className="text-gray-300">
              UrbanSense analyse les principaux axes routiers de Cotonou pour vous offrir une vision
              complète de la circulation et optimiser vos déplacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Axe Akpakpa - Calavi</h3>
              </div>
              <p className="text-gray-300 mb-4">14 km - Trajet optimal: 22 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-red-400" />
                  <span className="text-gray-300">Congestion actuelle: Élevée</span>
                </div>
                <span className="text-red-400 font-medium">+45 min</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Godomey - Cotonou Centre</h3>
              </div>
              <p className="text-gray-300 mb-4">8 km - Trajet optimal: 12 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-yellow-400" />
                  <span className="text-gray-300">Congestion actuelle: Modérée</span>
                </div>
                <span className="text-yellow-400 font-medium">+15 min</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Agla - Dantokpa</h3>
              </div>
              <p className="text-gray-300 mb-4">6 km - Trajet optimal: 15 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-green-400" />
                  <span className="text-gray-300">Congestion actuelle: Faible</span>
                </div>
                <span className="text-green-400 font-medium">+5 min</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Agla - Cadjehoun</h3>
              </div>
              <p className="text-gray-300 mb-4">7 km - Trajet optimal: 14 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-yellow-400" />
                  <span className="text-gray-300">Congestion actuelle: Modérée</span>
                </div>
                <span className="text-yellow-400 font-medium">+12 min</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Gbedjromede - Placodji</h3>
              </div>
              <p className="text-gray-300 mb-4">5 km - Trajet optimal: 10 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-red-400" />
                  <span className="text-gray-300">Congestion actuelle: Élevée</span>
                </div>
                <span className="text-red-400 font-medium">+25 min</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-900/40 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Ainouko - Fidjrossè</h3>
              </div>
              <p className="text-gray-300 mb-4">4 km - Trajet optimal: 8 min</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1 text-green-400" />
                  <span className="text-gray-300">Congestion actuelle: Faible</span>
                </div>
                <span className="text-green-400 font-medium">+4 min</span>
              </div>
            </div>
          </div>
        </section>
        
        <ProfileSelection />
        
        {/* Hackathon Impact Section */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-[#0a1022] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h5 className="text-urban-green font-medium mb-2">Impact Sociétal</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Une solution à fort impact pour l'Afrique
              </h2>
              <p className="text-gray-300">
                Notre innovation adresse des défis majeurs du développement urbain en Afrique de l'Ouest.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 border-0 bg-white/5 backdrop-blur-sm text-center border border-white/10">
                <Award className="h-10 w-10 mx-auto mb-4 text-blue-300" />
                <h3 className="text-lg font-bold mb-2 text-white">Innovation Locale</h3>
                <p className="text-sm text-gray-300">Solution adaptée au contexte spécifique des villes africaines</p>
              </Card>
              
              <Card className="p-6 border-0 bg-white/5 backdrop-blur-sm text-center border border-white/10">
                <Zap className="h-10 w-10 mx-auto mb-4 text-blue-300" />
                <h3 className="text-lg font-bold mb-2 text-white">Accessibilité</h3>
                <p className="text-sm text-gray-300">Interface simple et adaptée à tous les types d'utilisateurs</p>
              </Card>
              
              <Card className="p-6 border-0 bg-white/5 backdrop-blur-sm text-center border border-white/10">
                <TrendingUp className="h-10 w-10 mx-auto mb-4 text-blue-300" />
                <h3 className="text-lg font-bold mb-2 text-white">Scalabilité</h3>
                <p className="text-sm text-gray-300">Modèle applicable à d'autres villes africaines</p>
              </Card>
              
              <Card className="p-6 border-0 bg-white/5 backdrop-blur-sm text-center border border-white/10">
                <Target className="h-10 w-10 mx-auto mb-4 text-blue-300" />
                <h3 className="text-lg font-bold mb-2 text-white">Développement durable</h3>
                <p className="text-sm text-gray-300">Réduction des émissions polluantes et du gaspillage de carburant</p>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Avantages clés</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="bg-green-900/40 p-2 rounded-full">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Réduction de 22% du temps de trajet moyen</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-green-900/40 p-2 rounded-full">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Économie annuelle de 45 millions de litres de carburant</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-green-900/40 p-2 rounded-full">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Diminution de 18% des émissions de CO2 liées au transport</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-green-900/40 p-2 rounded-full">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Amélioration de 30% du temps d'intervention d'urgence</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Feuille de route</h3>
                <div className="relative border-l-2 border-blue-500/50 pl-6 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-lg text-white">Phase 1 : Pilote</h4>
                    <p className="text-gray-300">Déploiement sur l'axe Akpakpa-Calavi</p>
                    <p className="text-sm text-blue-300 font-medium">En cours</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gray-500"></div>
                    <h4 className="font-bold text-lg text-white">Phase 2 : Extension</h4>
                    <p className="text-gray-300">Couverture de tous les axes principaux de Cotonou</p>
                    <p className="text-sm text-gray-400 font-medium">T3 2025</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gray-500"></div>
                    <h4 className="font-bold text-lg text-white">Phase 3 : Expansion</h4>
                    <p className="text-gray-300">Déploiement dans d'autres villes d'Afrique de l'Ouest</p>
                    <p className="text-sm text-gray-400 font-medium">2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-[#0f1729]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h5 className="text-urban-green font-medium mb-2">Résultats Concrets</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Des améliorations mesurables pour la ville
              </h2>
              <p className="text-gray-300">
                Les solutions UrbanSense ont déjà démontré leur efficacité lors des phases pilotes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 text-center">
                <LineChart className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <div className="text-4xl font-bold text-green-400 mb-2">-22%</div>
                <p className="text-gray-300">Réduction des temps de trajet aux heures de pointe</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <div className="text-4xl font-bold text-green-400 mb-2">15 min</div>
                <p className="text-gray-300">Anticipation des embouteillages en avance</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 text-center">
                <Activity className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <div className="text-4xl font-bold text-green-400 mb-2">-18%</div>
                <p className="text-gray-300">Réduction des émissions polluantes</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 text-center">
                <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <div className="text-4xl font-bold text-green-400 mb-2">+30%</div>
                <p className="text-gray-300">Amélioration des temps d'intervention d'urgence</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-urban-blue text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à optimiser la mobilité urbaine à Cotonou?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              Rejoignez notre programme pilote et contribuez à fluidifier le trafic sur l'axe Akpakpa-Calavi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-urban-blue hover:bg-gray-100 flex items-center gap-2 text-lg py-6 px-8">
                Participer au projet pilote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Contacter notre équipe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Check = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default Index;
