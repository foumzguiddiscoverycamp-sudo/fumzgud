
import React, { useState } from 'react';
import { Tour, Language, Translation } from '../types';

interface Props {
  tour: Tour;
  lang: Language;
  t: Translation;
}

const TourCard: React.FC<Props> = ({ tour, lang, t }) => {
  const [showItinerary, setShowItinerary] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-100 flex flex-col h-full group">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title[lang]} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
            {tour.price}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight">{tour.title[lang]}</h3>
          <p className="text-stone-500 text-sm mb-4 line-clamp-2">{tour.description[lang]}</p>
          <div className="flex items-center text-orange-700 font-semibold mb-4 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {tour.duration[lang]}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tour.features[lang].map((f, i) => (
              <span key={i} className="bg-orange-50 text-orange-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border border-orange-100">
                {f}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setShowItinerary(true)}
            className="mt-auto w-full py-3 bg-stone-900 text-white text-sm font-bold rounded-xl hover:bg-orange-600 transition-colors"
          >
            {t.viewItinerary}
          </button>
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItinerary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-8 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-stone-900">{tour.title[lang]}</h2>
                <button 
                  onClick={() => setShowItinerary(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              
              <div className="space-y-8">
                {tour.itinerary ? tour.itinerary.map((step) => (
                  <div key={step.day} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-200">
                      {step.day}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-stone-800 mb-2">{step.title[lang]}</h4>
                      <p className="text-stone-600 leading-relaxed">{step.description[lang]}</p>
                    </div>
                  </div>
                )) : (
                  <p className="text-stone-500 italic">Detailed itinerary available upon request.</p>
                )}
              </div>
              
              <button 
                onClick={() => setShowItinerary(false)}
                className="mt-10 w-full py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourCard;
