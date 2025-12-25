
import React from 'react';
import { Language, Translation } from '../types';

interface Props {
  lang: Language;
  t: Translation;
}

const transfers = [
  { 
    from: 'Agadir', 
    info: { 
      en: 'Via Bouizakarne & Tata (Return via Tazenakht)', 
      fr: 'Via Bouizakarne & Tata (Retour via Tazenakht)' 
    }, 
    dist: '400km', 
    time: '7-8h' 
  },
  { 
    from: 'Marrakech', 
    info: { 
      en: 'Via Tizi n\'Tichka & Ait Ben Haddou', 
      fr: 'Via Tizi n\'Tichka & Ait Ben Haddou' 
    }, 
    dist: '360km', 
    time: '6-7h' 
  },
  { 
    from: 'Ouarzazate', 
    info: { 
      en: 'Via Tazenakht (Fast Route)', 
      fr: 'Via Tazenakht (Route Rapide)' 
    }, 
    dist: '150km', 
    time: '2.5h' 
  },
  { 
    from: 'Zagora', 
    info: { 
      en: 'Via Draa Valley & Akdez', 
      fr: 'Via Vallée du Draa & Akdez' 
    }, 
    dist: '120km', 
    time: '2h' 
  },
];

const TransferSection: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="bg-stone-900 text-white py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{t.transfersTitle}</h2>
          <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-lg">{t.transfersSub}</p>
          <div className="space-y-8">
            {transfers.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-white/10 pb-8 group">
                <div>
                  <span className="text-2xl font-bold block mb-1 group-hover:text-orange-500 transition-colors">{item.from} ↔ Foum Zguid</span>
                  <span className="text-stone-500 text-xs uppercase tracking-[0.2em] font-bold">
                    {lang === 'en' ? item.info.en : item.info.fr}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-white font-bold text-xl">{item.dist}</span>
                  <span className="text-orange-600 text-[10px] font-black uppercase tracking-widest">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-600/20 rounded-[4rem] blur-2xl group-hover:bg-orange-600/30 transition-all"></div>
          <img 
            src="https://i.ibb.co/pvgQc4MT/majid-staff.jpg" 
            alt="Majid Transfer Service" 
            className="rounded-[3.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-10 left-10 bg-white text-stone-900 p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-stone-100">
             <div className="text-orange-600 font-black text-4xl mb-1">4x4</div>
             <div className="text-stone-500 text-xs uppercase tracking-widest font-bold">Professional Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSection;
