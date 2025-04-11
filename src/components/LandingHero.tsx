
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Star, BarChart3, MapPin, Clock } from "lucide-react";

const LandingHero = () => {
  const scrollToProfiles = () => {
    const element = document.getElementById('profiles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-20 landing-hero">
      {/* Night Sky Background with Stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#081029] to-[#101942] overflow-hidden">
        {/* Generated Stars */}
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full ${Math.random() > 0.7 ? 'animate-pulse' : ''}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
                backgroundColor: Math.random() > 0.9 ? 'rgb(255, 210, 210)' : 
                               Math.random() > 0.8 ? 'rgb(210, 230, 255)' : 'white',
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars */}
        <div className="shooting-stars absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-0.5 bg-white"
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
                animation: `shooting-star ${Math.random() * 10 + 10}s linear ${Math.random() * 10}s infinite`
              }}
            />
          ))}
        </div>
        
        {/* Subtle Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Optional simple grid overlay for depth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzAgMzBtMzAgMEgwbTAtMzB2NjAiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center border border-white/20">
            <Star className="h-4 w-4 mr-1.5 text-yellow-300" />
            <span className="text-sm font-medium text-white">Projet d'innovation urbaine pour l'Afrique de l'Ouest</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
            UrbanSense
          </span>
          <span className="block mt-3 text-3xl md:text-4xl lg:text-5xl">La ville intelligente à portée de main</span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          L'application qui transforme la mobilité urbaine en Afrique de l'Ouest, 
          en analysant en temps réel les flux urbains pour réduire les embouteillages, 
          optimiser les déplacements et améliorer la qualité de vie à Cotonou.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-6 px-8 group transition-all duration-300 shadow-lg shadow-blue-500/20"
            onClick={scrollToProfiles}
          >
            Découvrir les profils
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 text-lg py-6 px-8 transition-all duration-300"
          >
            En savoir plus
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-4xl font-bold text-white">22min</span>
            </div>
            <p className="text-blue-100">Trajet optimal sur l'axe Akpakpa-Calavi</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-red-300" />
              </div>
              <span className="text-4xl font-bold text-red-300">+2h</span>
            </div>
            <p className="text-blue-100">Temps perdu aux heures de pointe</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 text-green-300" />
              </div>
              <span className="text-4xl font-bold text-green-300">85%</span>
            </div>
            <p className="text-blue-100">Précision de notre moteur prédictif</p>
          </div>
        </div>
      </div>
      
      <ChevronDown 
        className="absolute bottom-8 animate-bounce h-8 w-8 text-white opacity-70 cursor-pointer"
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} 
      />
      
      {/* Keyframes for shooting stars */}
      <style>
        {`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          5% {
            transform: translateX(-100px) translateY(100px) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(-100px) translateY(100px) rotate(-45deg);
            opacity: 0;
          }
        }
        `}
      </style>
    </div>
  );
};

export default LandingHero;
