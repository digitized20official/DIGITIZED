'use client';

import { MessageSquare, Pencil, Code2, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'We discuss your goals and understand your business requirements.',
    },
    {
      icon: Pencil,
      title: 'Design & Planning',
      description: 'Strategic planning and beautiful designs tailored to your vision.',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Expert coding and implementation with cutting-edge technologies.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Seamless launch followed by ongoing technical support and updates.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4" style={{ color: '#2d1b69' }}>
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to delivering excellence, from consultation to launch
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 transform -translate-y-1/2" style={{ backgroundImage: 'linear-gradient(to right, #2d1b69, transparent)' }} />
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#2d1b69' }}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-6">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(45, 27, 105, 0.1)' }}>
                      <IconComponent className="w-6 h-6" style={{ color: '#2d1b69' }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3" style={{ color: '#2d1b69' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
