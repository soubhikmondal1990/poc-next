'use client';

import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('hello')}</h1>
      <button>{t('login')}</button>
    </div>
  );
}
