
import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-urban-green" />
              <span className="text-xl font-bold text-white">
                Urban<span className="text-urban-green">Sense</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Intelligence urbaine pour une mobilité et une sécurité optimisées à Cotonou.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-3 text-urban-green">Produit</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Démonstration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-urban-green">Ressources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-urban-green">Entreprise</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Équipe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UrbanSense. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
