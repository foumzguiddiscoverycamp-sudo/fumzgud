
import React, { useState, useEffect } from 'react';
import { Language, Translation } from './types.ts';
import { TOURS, TRANSLATIONS, CONTACT_INFO } from './constants.tsx';
import LanguageToggle from './components/LanguageToggle.tsx';
import TourCard from './components/TourCard.tsx';
import TransferSection from './components/TransferSection.tsx';
import { getDesertTips } from './services/geminiService.ts';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [tips, setTips] = useState<string>("");

  const t: Translation = TRANSLATIONS[lang];

  useEffect(() => {
    const fetchTips = async () => {
      const generatedTips = await getDesertTips(lang);
      if (generatedTips) setTips(generatedTips);
    };
    fetchTips();
  }, [lang]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bookingWhatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`;
  const bookingEmailUrl = `mailto:${CONTACT_INFO.email}`;

  const majidPhotos = {
    tea: "https://i.ibb.co/F4GzHBt3/majid-tea.jpg",
    goat: "https://i.ibb.co/v6nk6qdx/majid-goat.jpg",
    group: "https://i.ibb.co/YB5v46Ff/majid-group.jpg",
    dunes: "https://i.ibb.co/6R2MvH86/majid-dunes.jpg",
    staff: "https://i.ibb.co/pvgQc4MT/majid-staff.jpg",
    blue: "https://i.ibb.co/nqFrmsqK/majid-blue.jpg"
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-orange-200">
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* Floating WhatsApp */}
      <a 
        href={bookingWhatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center shadow-green-500/20"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 glass-morphism px-8 py-5 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold tracking-tighter text-orange-600">Foum Zguid Discovery</div>
        <div className="hidden md:flex gap-10 font-bold uppercase text-[11px] tracking-widest text-stone-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-orange-600 transition-colors uppercase">Majid</button>
          <button onClick={() => scrollToSection('tours')} className="hover:text-orange-600 transition-colors uppercase">Tours</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-orange-600 transition-colors uppercase">Gallery</button>
          <button onClick={() => scrollToSection('transfers')} className="hover:text-orange-600 transition-colors uppercase">Transfers</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-orange-600 transition-colors uppercase">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
          <img 
            src={majidPhotos.dunes} 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Majid in the Dunes"
          />
        </div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-[7rem] font-bold mb-8 drop-shadow-2xl leading-[0.9] tracking-tighter">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.5em] uppercase opacity-80 mb-16">
            {t.heroSub}
          </p>
          <button 
            onClick={() => scrollToSection('tours')} 
            className="bg-orange-600 hover:bg-orange-700 text-white px-14 py-6 rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            {lang === 'en' ? 'Explore Foum Zguid' : 'Explorer Foum Zguid'}
          </button>
        </div>
      </section>

      {/* About Majid Section */}
      <section id="about" className="py-40 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform"></div>
          <div className="rounded-[2.5rem] shadow-2xl relative z-10 w-full aspect-[4/5] overflow-hidden border-[12px] border-white transition-transform group-hover:-translate-y-2">
            <img 
              src={majidPhotos.tea} 
              alt="Majid Your Guide" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-stone-100 text-center">
             <div className="text-orange-600 font-bold text-3xl mb-1">Majid</div>
             <div className="text-stone-500 text-xs uppercase tracking-widest font-bold">Your Authentic Guide</div>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-orange-600"></div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
               {lang === 'en' ? 'Authenticity First' : 'Authenticité d\'abord'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-stone-900">{t.aboutTitle}</h2>
          <p className="text-stone-600 text-2xl leading-relaxed mb-12 font-light">
            {t.aboutText}
          </p>
          <div className="grid grid-cols-2 gap-6 mb-12 text-sm font-bold uppercase tracking-tighter text-stone-700">
             <div className="flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
               Local Wisdom
             </div>
             <div className="flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</span>
               Real Experiences
             </div>
          </div>
          <div className="bg-orange-50/50 p-10 rounded-[2.5rem] border border-orange-100 relative shadow-inner">
             <p className="relative z-10 text-stone-700 text-xl italic leading-relaxed">
               {tips || (lang === 'en' ? "Welcome to my world. Let me show you the true Sahara." : "Bienvenue dans mon monde. Laissez-moi vous montrer le vrai Sahara.") }
             </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-5xl font-bold mb-4">{lang === 'en' ? 'Our Memories' : 'Nos Souvenirs'}</h2>
          <p className="text-stone-400 uppercase tracking-widest text-sm mb-6">Real moments from Foum Zguid</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.blue} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.goat} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.group} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.staff} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.tea} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group"><img src={majidPhotos.dunes} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-40 bg-stone-100/50 px-6 border-y border-stone-200">
        <div className="max-w-7xl mx-auto mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">{t.toursTitle}</h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto font-light">
            {lang === 'en' ? 'Our two most exclusive experiences, curated personally by Majid.' : 'Nos deux expériences les plus exclusives, organisées personnellement par Majid.'}
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {TOURS.map(tour => (
            <TourCard key={tour.id} tour={tour} lang={lang} t={t} />
          ))}
        </div>
      </section>

      {/* Transfer Section */}
      <section id="transfers">
        <TransferSection lang={lang} t={t} />
      </section>

      {/* Map Section */}
      <section id="location" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">{t.mapTitle}</h2>
            <p className="text-stone-400 uppercase tracking-[0.3em] text-sm">Foum Zguid, Morocco</p>
          </div>
          <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-[#f5f5f5] relative group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.36132535032!2d-6.8795!3d30.0863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzEwLjciTiA2wrA1MicyNi4xIlc!5e0!3m2!1sen!2s!4v1714150000000!5m2!1sen!2s" 
                className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
             ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-5xl mx-auto bg-stone-900 text-white rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-orange-900/10 shadow-2xl">
           <div className="relative z-10">
             <h2 className="text-6xl md:text-8xl font-bold mb-10 leading-none">{t.bookingTitle}</h2>
             <p className="text-stone-400 text-2xl mb-16 font-light max-w-2xl mx-auto">{t.contactMajid}</p>
             <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a 
                  href={bookingWhatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] text-white px-14 py-7 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-green-900/40 flex items-center gap-4 w-full sm:w-auto justify-center"
                >
                  {t.whatsappBtn}
                </a>
                <a 
                  href={bookingEmailUrl} 
                  className="bg-white text-stone-900 px-14 py-7 rounded-2xl font-bold text-xl hover:bg-stone-200 transition-colors shadow-xl w-full sm:w-auto text-center"
                >
                  {t.emailBtn}
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-stone-50 text-center border-t border-stone-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-orange-600">FZC.</div>
          <p className="text-stone-400 text-sm tracking-widest uppercase">&copy; {new Date().getFullYear()} {t.heroTitle}. All rights reserved.</p>
          <div className="text-stone-500 font-bold uppercase text-[10px] tracking-widest">Guide: Majid</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
