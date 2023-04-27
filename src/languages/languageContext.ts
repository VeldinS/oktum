import { createContext } from 'react';

interface languageContextObject{
    language: 'bosnian' | 'english',
    setLanguage: Function
}

const LanguageContext = createContext<languageContextObject | null>(null);

export default LanguageContext;