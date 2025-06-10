import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 ${className}`}>
      <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
        <Icon size={24} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;