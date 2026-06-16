import { useAppSelector } from '@/store/hooks';
import { languages, TranslationKey } from '@/i18n';
import { selectLanguage } from '@/features/i18n/i18nSelectors';

export function useTranslation() {
  const lang = useAppSelector(selectLanguage);

  const t = (key: TranslationKey) => {
    return languages[lang][key];
  };

  return { t, lang };
}
