import { render, fireEvent, screen } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { reactQueryClient } from '../../helpers/reactQueryClient';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('App', () => {
  test('should navigate across different routes', () => {
    renderWithRouter(
      <QueryClientProvider client={reactQueryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );
    expect(screen.getByText(/search/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/About/i));
    expect(screen.getByText(/Tech Challenge/i)).toBeInTheDocument();
  });
});
