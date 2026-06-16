import type { RootState } from '@/store/store';

export const selectLanguage = (state: RootState) => state.i18n.lang;
