
import React, { ReactNode } from "react";
import { MapPin, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  userType: "citizen" | "urbanist" | "authority";
}

const DashboardLayout = ({ children, title, subtitle, userType }: DashboardLayoutProps) => {
  // Determine badge color based on user type
  const badgeColor = {
    citizen: "bg-urban-blue text-white",
    urbanist: "bg-urban-green text-white",
    authority: "bg-urban-red text-white"
  };

  // Determine display name based on user type
  const displayName = {
    citizen: "Citoyen",
    urbanist: "Urbaniste",
    authority: "Autorité"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-urban-blue" />
            <span className="text-xl font-bold text-urban-blue">
              Urban<span className="text-urban-green">Sense</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-urban-gray hover:text-urban-blue transition-colors">
              Accueil
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-urban-red" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                  <Button variant="ghost" size="sm">Tout marquer lu</Button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="p-4 cursor-default">
                    <div>
                      <p className="font-medium">Alerte trafic</p>
                      <p className="text-sm text-urban-gray mt-1">Accident sur l'axe Calavi-Cotonou. Temps estimé: +35min.</p>
                      <p className="text-xs text-urban-gray/70 mt-1">Il y a 15 minutes</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-4 cursor-default">
                    <div>
                      <p className="font-medium">Alerte prédictive</p>
                      <p className="text-sm text-urban-gray mt-1">Embouteillage prévu à 17h30 sur votre trajet habituel.</p>
                      <p className="text-xs text-urban-gray/70 mt-1">Il y a 1 heure</p>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-2 flex justify-center">
                  <Link to="#" className="text-center text-urban-blue text-sm">Voir toutes les notifications</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={`${badgeColor[userType]} hover:opacity-90`}>
                  <User className="h-4 w-4 mr-2" />
                  {displayName[userType]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mon Profil</DropdownMenuItem>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Déconnexion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-urban-blue mb-2">{title}</h1>
          <p className="text-urban-gray">{subtitle}</p>
        </div>
        
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
