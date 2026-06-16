import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import Home from '@/app/page';
import { setLanguage } from '@/features/i18n/i18nSlice';

describe('Home Page i18n', () => {
  it('renders default English text', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('switches to French', async () => {
    const { store } = renderWithProviders(<Home />);

    store.dispatch(setLanguage('fr'));

    await waitFor(() => {
      expect(screen.getByText('Bonjour')).toBeInTheDocument();
    });
  });
});
