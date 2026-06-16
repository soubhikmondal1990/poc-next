import { screen, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import Home from '@/app/page';
import { setLanguage } from '@/features/i18n/i18nSlice';

it('switches to French', async () => {
  const { store } = renderWithProviders(<Home />);

  act(() => {
    store.dispatch(setLanguage('fr'));
  });

  await waitFor(() => {
    expect(screen.getByText('Bonjour')).toBeInTheDocument();
  });
});
