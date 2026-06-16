'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLanguage } from '@/features/i18n/i18nSlice';
import { selectLanguage } from '@/features/i18n/i18nSelectors';

export default function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(selectLanguage);

  return (
    <div>
      <button onClick={() => dispatch(setLanguage('en'))}>
        EN {lang === 'en' && '✓'}
      </button>

      <button onClick={() => dispatch(setLanguage('fr'))}>
        FR {lang === 'fr' && '✓'}
      </button>
    </div>
  );
}
