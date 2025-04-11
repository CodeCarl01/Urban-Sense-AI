
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <MapPin className="h-6 w-6 text-urban-blue" />
        <span className="text-xl font-bold text-urban-blue">
          Urban<span className="text-urban-green">Sense</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-urban-gray hover:text-urban-blue transition-colors">
          Fonctionnalités
        </a>
        <a href="#profiles" className="text-urban-gray hover:text-urban-blue transition-colors">
          Profils
        </a>
        <a href="#demo" className="text-urban-gray hover:text-urban-blue transition-colors">
          Démo
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <Link to="/citizen">
            <Button variant="outline" className="border-urban-blue text-urban-blue hover:bg-urban-blue/5">
              Citoyen
            </Button>
          </Link>
          <Link to="/urbanist">
            <Button variant="outline" className="border-urban-blue text-urban-blue hover:bg-urban-blue/5">
              Urbaniste
            </Button>
          </Link>
          <Link to="/authority">
            <Button variant="outline" className="border-urban-blue text-urban-blue hover:bg-urban-blue/5">
              Autorité
            </Button>
          </Link>
        </div>
        <Button className="bg-urban-blue hover:bg-urban-blue/90 text-white">
          Accéder à la démo
        </Button>
        <button
          className="md:hidden text-urban-gray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
          <a href="#features" className="text-urban-gray hover:text-urban-blue transition-colors p-2">
            Fonctionnalités
          </a>
          <a href="#profiles" className="text-urban-gray hover:text-urban-blue transition-colors p-2">
            Profils
          </a>
          <a href="#demo" className="text-urban-gray hover:text-urban-blue transition-colors p-2">
            Démo
          </a>
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Link to="/citizen">
              <Button variant="outline" className="w-full border-urban-blue text-urban-blue hover:bg-urban-blue/5">
                Citoyen
              </Button>
            </Link>
            <Link to="/urbanist">
              <Button variant="outline" className="w-full border-urban-blue text-urban-blue hover:bg-urban-blue/5">
                Urbaniste
              </Button>
            </Link>
            <Link to="/authority">
              <Button variant="outline" className="w-full border-urban-blue text-urban-blue hover:bg-urban-blue/5">
                Autorité
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
