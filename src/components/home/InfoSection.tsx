import React from 'react';

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  children,
  reverse = false,
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
          <div className="w-full md:w-1/2">
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          <div className="w-full md:w-1/2">
            {subtitle && <p className="text-green-600 font-medium mb-2">{subtitle}</p>}
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="text-gray-700 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;