'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const whatsappLink = 'https://wa.me/+918849865018?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20website.';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative py-20 md:py-32 text-white overflow-hidden" style={{ backgroundColor: '#2d1b69' }}>
      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-20px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes barUp1 { 0%{height:20px} 100%{height:55px} }
        @keyframes barUp2 { 0%{height:20px} 100%{height:80px} }
        @keyframes barUp3 { 0%{height:20px} 100%{height:45px} }
        .float1 { animation: float1 4s ease-in-out infinite; }
        .float2 { animation: float2 5s ease-in-out infinite 0.5s; }
        .float3 { animation: float3 6s ease-in-out infinite 1s; }
        .pulse-dot { animation: pulse 1.5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Websites for Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Custom Coded · WordPress · Ecommerce · SEO & Marketing
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#25d366' }}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.247l-.355.192-.368-.06a9.879 9.879 0 00-3.464.608l.142.142a9.882 9.882 0 012.354 2.354l.06.368-.192.355a9.87 9.87 0 001.247 4.946h.004c5.464 0 9.888-4.424 9.888-9.888 0-5.464-4.424-9.888-9.888-9.888"/>
              </svg>
              Get Free Consultation
            </a>
          </div>

          {/* Right — Animated 3D Illustration */}
          <div className="hidden md:flex items-center justify-center relative h-96">

            {/* Browser Window — main floating card */}
            <div className="float1 absolute" style={{
              top: '0px', left: '20px', width: '300px',
              background: 'white', borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}>
              {/* Browser top bar */}
              <div style={{ background: '#f1f5f9', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}/>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }}/>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }}/>
                <div style={{ flex: 1, background: 'white', borderRadius: 20, height: 16, marginLeft: 8, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                  <div style={{ width: 80, height: 6, background: '#e2e8f0', borderRadius: 4 }}/>
                </div>
              </div>
              {/* Browser content */}
              <div style={{ padding: '16px', background: 'linear-gradient(135deg, #2d1b69 0%, #3d2b7f 100%)' }}>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.7)', borderRadius: 4, marginBottom: 8, width: '70%' }}/>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 4, marginBottom: 6, width: '90%' }}/>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 4, marginBottom: 12, width: '60%' }}/>
                <div style={{ height: 28, background: '#25d366', borderRadius: 6, width: '50%' }}/>
              </div>
            </div>

            {/* Stats Card */}
            <div className="float2 absolute" style={{
              bottom: '10px', left: '0px', width: '160px',
              background: 'white', borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              padding: '14px'
            }}>
              <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 8, fontWeight: 600 }}>Monthly Traffic</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
                {[
                  { h: 55, color: '#3d2b7f' },
                  { h: 80, color: '#25d366' },
                  { h: 45, color: '#3d2b7f' },
                  { h: 70, color: '#25d366' },
                  { h: 90, color: '#3d2b7f' },
                ].map((bar, i) => (
                  <div key={i} style={{
                    flex: 1, height: bar.h, background: bar.color,
                    borderRadius: '4px 4px 0 0', opacity: 0.85
                  }}/>
                ))}
              </div>
            </div>

            {/* Live badge */}
            <div className="float3 absolute" style={{
              top: '10px', right: '0px',
              background: 'white', borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              padding: '8px 14px',
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#25d366' }}/>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#1e1b4b' }}>Live Website</span>
            </div>

            {/* Rating card */}
            <div className="float2 absolute" style={{
              bottom: '20px', right: '0px',
              background: 'white', borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              padding: '10px 14px', textAlign: 'center'
            }}>
              <p style={{ fontSize: 20, fontWeight: 800, color: '#1e1b4b', lineHeight: 1 }}>5.0</p>
              <div style={{ color: '#f59e0b', fontSize: 12 }}>★★★★★</div>
              <p style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>Client Rating</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;