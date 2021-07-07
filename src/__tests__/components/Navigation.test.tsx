import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from 'src/components/Navigation';
import { NavigationRoute } from 'src/interfaces/Navigation';
import { ThemeProvider } from 'src/providers/ThemeProvider';

describe('Navigation', () => {
  beforeEach(() => {
    const routes: NavigationRoute[] = [
      {
        link: '/route-1',
        label: 'route-1',
      },
      {
        link: '/route-2',
        label: 'route-2',
      },
      {
        link: '/route-3',
        label: 'route-3',
      },
    ];

    render(
      <ThemeProvider>
        <Router>
          <Navigation routes={routes} />
        </Router>
      </ThemeProvider>
    );
  });

  test('should display 3 menu options', () => {
    expect(screen.getAllByText(/route/i).length).toBe(3);
  });

  test('should display a dark mask as default (to change theme to dark)', () => {
    expect(screen.getByAltText('Toggle Theme to dark')).toBeInTheDocument();
  });

  test('should display a light mask (to change theme to light) after toggling theme to dark', () => {
    fireEvent.click(screen.getByAltText('Toggle Theme to dark'));
    expect(screen.getByAltText('Toggle Theme to light')).toBeInTheDocument();
  });
});
