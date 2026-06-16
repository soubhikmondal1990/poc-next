import en from './en';
import fr from './fr';

export const languages = {
  en,
  fr,
};

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof en;
