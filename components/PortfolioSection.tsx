'use client';

import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Tender Loving Empire',
      description:
        'Small gift shop and music venue with e-commerce store selling handmade and local products.',
      image: 'bg-gradient-to-br from-orange-400 to-red-500',
      website: 'https://www.tenderlovingempire.com',
      wordpress: true,
    },
    {
      title: 'Breather',
      description:
        'Clean and modern workspace booking website with simple UI and easy navigation.',
      image: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      website: 'https://www.careers.breather.com',
      wordpress: true,
    },
    {
      title: 'Bushwick Kitchen',
      description:
        'Small food brand selling specialty sauces and honey products with a clean online store.',
      image: 'bg-gradient-to-br from-green-400 to-emerald-500',
      website: 'https://bushwickkitchen.com',
      wordpress: true,
    },
    {
      title: 'Ratio Coffee',
      description:
        'Premium coffee machine brand with a beautiful product showcase and clean modern design.',
      image: 'bg-gradient-to-br from-pink-400 to-purple-500',
      website: 'https://ratiocoffee.com',
      wordpress: true,
    },
    {
      title: 'Heydays Studio',
      description:
        'Small creative branding and design studio with a minimal and elegant portfolio website.',
      image: 'bg-gradient-to-br from-slate-500 to-slate-700',
      website: 'https://heydays.no',
      wordpress: true,
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Fetch WordPress website previews dynamically
  useEffect(() => {
    const fetchProjectDetails = async () => {
      setLoading(true);
      try {
        // Fetch additional data for each project from their WordPress APIs
        const updatedProjects = await Promise.all(
          projects.map(async (project) => {
            try {
              // Try to fetch WordPress site info
              const response = await fetch(`${project.website}/wp-json/wp/v2/pages?per_page=1`, {
                signal: AbortSignal.timeout(3000),
              });
              if (response.ok) {
                await response.json();
                return {
                  ...project,
                  live: true,
                };
              }
              return project;
            } catch (error) {
              return project;
            }
          })
        );
        setProjects(updatedProjects);
      } catch (error) {
        console.log('[v0] Portfolio fetch completed with defaults');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4" style={{ color: '#2d1b69' }}>
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Successful projects that showcase our expertise and dedication to client success
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              {/* Project Image Placeholder */}
              <div
                className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center flex-col gap-2">
                  <Globe className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-white font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold" style={{ color: '#2d1b69' }}>
                    {project.title}
                  </h3>
                  {project.live && (
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold hover:gap-2 transition-all group/btn"
                  style={{ color: '#2d1b69' }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
