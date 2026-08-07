/** @format */

import type { TypesLang, TypesUI } from "./i18n.types";
import { translations } from "./translations";
const defaultLang = "en";
export const useTranslation = (lang: TypesLang) => {
  return function t<K extends keyof TypesUI>(key: K): TypesUI[K] {
    const translation = translations[lang][key] || translations[defaultLang][key];

    return translation as TypesUI[K];
  };
};
