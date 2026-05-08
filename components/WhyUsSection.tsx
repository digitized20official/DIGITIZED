'use client';

import {
  Smartphone,
  Zap,
  Search,
  CreditCard,
  HelpCircle,
  MapPin,
} from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Every website is fully responsive and optimized for all devices.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to improve your search rankings.',
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway',
      description: 'Secure payment integration for e-commerce and online transactions.',
    },
    {
      icon: HelpCircle,
      title: 'Free Support',
      description: 'Ongoing technical support and maintenance included.',
    },
    {
      icon: MapPin,
      title: 'Local Ahmedabad Team',
      description: 'Based in Ahmedabad, understanding local market needs.',
    },
  ];

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: 'rgba(45, 27, 105, 0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4" style={{ color: '#2d1b69' }}>
            Why Choose Digitized?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring together expertise, dedication, and local knowledge to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'rgba(45, 27, 105, 0.1)' }}>
                    <IconComponent className="w-6 h-6" style={{ color: '#2d1b69' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#2d1b69' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
