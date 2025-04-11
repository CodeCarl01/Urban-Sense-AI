
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "p-6 flex flex-col items-center text-center transition-all hover:shadow-urban border-0 shadow-md", 
      className
    )}>
      <div className="mb-4 text-urban-blue p-3 bg-blue-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-urban-blue">{title}</h3>
      <p className="text-urban-gray">{description}</p>
    </Card>
  );
};

export default FeatureCard;
