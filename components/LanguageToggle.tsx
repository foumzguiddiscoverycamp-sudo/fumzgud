
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageToggle: React.FC<Props> = ({ lang, setLang }) => {
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-orange-200 hover:bg-orange-50 transition-colors font-semibold text-orange-800"
    >
      {lang === 'en' ? 'Français 🇫🇷' : 'English 🇬🇧'}
    </button>
  );
};

export default LanguageToggle;
