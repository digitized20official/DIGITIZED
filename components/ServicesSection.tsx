'use client';

import {
  Code2,
  Layers,
  ShoppingCart,
  Palette,
  TrendingUp,
  Globe,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Website Development',
      description: 'Bespoke websites built from scratch tailored to your unique business needs and vision.',
    },
    {
      icon: Layers,
      title: 'WordPress CMS',
      description: 'Flexible WordPress solutions that empower you to manage your content with ease.',
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Store',
      description: 'Complete online shopping solutions with secure payments and inventory management.',
    },
    {
      icon: Palette,
      title: 'Website Redesign',
      description: 'Transform your existing website with modern design and improved user experience.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Strategic optimization to boost your online visibility and drive qualified traffic.',
    },
    {
      icon: Globe,
      title: 'Domain & Hosting',
      description: 'Reliable domain registration and hosting services with expert technical support.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4" style={{ color: '#2d1b69' }}>
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions designed to elevate your business online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="mb-6">
                  <div className="inline-block p-3 rounded-lg group-hover:opacity-20 transition-colors" style={{ backgroundColor: 'rgba(45, 27, 105, 0.1)' }}>
                    <IconComponent className="w-6 h-6" style={{ color: '#2d1b69' }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2d1b69' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
