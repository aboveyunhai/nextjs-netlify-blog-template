import React, { createContext, useContext, useState } from "react";

export const defaultLocale = 'cn';
export const locales = ["cn", "en"]
export const LanguageContext = createContext(null);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState('cn');


  function toggleLocale() {
      setLocale(locale => (locale === "cn") ? "en" : "cn");
  }

  return (
    <LanguageContext.Provider value={[locale, toggleLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}
