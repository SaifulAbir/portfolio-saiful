'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import dataEn from './data.json';
import dataDe from './data.de.json';

export type Locale = 'en' | 'de';

type DataType = typeof dataEn;

interface LanguageContextValue {
    locale: Locale;
    toggleLanguage: () => void;
    data: DataType;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const dataMap: Record<Locale, DataType> = { en: dataEn, de: dataDe as DataType };

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    useEffect(() => {
        const stored = localStorage.getItem('locale') as Locale | null;
        if (stored === 'en' || stored === 'de') {
            setLocale(stored);
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLocale((prev) => {
            const next = prev === 'en' ? 'de' : 'en';
            localStorage.setItem('locale', next);
            return next;
        });
    }, []);

    const data = dataMap[locale];

    return (
        <LanguageContext.Provider value={{ locale, toggleLanguage, data }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
