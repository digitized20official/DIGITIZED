'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.from('contacts').insert([{
      full_name: formData.name,
      phone: formData.phone,
      business_type: formData.businessType,
      message: formData.message,
    }]);

    setLoading(false);

    if (error) {
      setError('Something went wrong. Please try again.');
      console.error(error);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', businessType: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const inputStyle = "w-full px-4 py-3 bg-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-indigo-400 text-indigo-900 font-bold placeholder:text-gray-400 placeholder:font-normal";

  const whatsappLink = 'https://wa.me/+918849865018?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project.';
  const emailLink = 'mailto:digitizeed20@gmail.com';

  return (
    <section id="contact" className="py-20 md:py-32 text-white" style={{ backgroundColor: '#2d1b69' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to take your online presence to the next level? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-1 space-y-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
             className="flex items-start gap-4 p-6 rounded-lg transition-colors"
style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <div className="p-3 bg-green-500 rounded-lg flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
<div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p className="text-white">+91 8849865018</p>
              </div>
            </a>

            <a href={emailLink}
className="flex items-start gap-4 p-6 rounded-lg transition-colors"
style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-white break-all">digitizeed20@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918849865018"
className="flex items-start gap-4 p-6 rounded-lg transition-colors"
style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>              <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <Phone className="w-6 h-6 text-white" />
              </div>
<div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-white">+91 8849865018</p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name}
                  onChange={handleChange} required className={inputStyle} placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone}
                  onChange={handleChange} required className={inputStyle} placeholder="Your phone number" />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium mb-2">Business Type</label>
                <select id="businessType" name="businessType" value={formData.businessType}
                  onChange={handleChange} required className={inputStyle}>
                  <option value="">Select your business type</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="restaurant">Restaurant/Food</option>
                  <option value="healthcare">Healthcare/Medical</option>
                  <option value="professional">Professional Services</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  className={`${inputStyle} resize-none`}
                  placeholder="Tell us about your project..." />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button type="submit" disabled={loading || submitted}
                className="w-full px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
                style={{ backgroundColor: '#3d2b7f' }}>
                {loading ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;