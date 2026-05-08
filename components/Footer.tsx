'use client';

import { Linkedin, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/digitized.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#2d1b69' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Digitized Web Solutions</h3>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Ahmedabad, Gujarat, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:digitizeed20@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  digitizeed20@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918849865018"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 8849865018
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Digitized Web Solutions · Ahmedabad. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
