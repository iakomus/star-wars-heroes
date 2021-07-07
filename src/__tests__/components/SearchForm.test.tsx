import { fireEvent, render, screen } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from 'src/components/SearchForm';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { reactQueryClient } from '../../helpers/reactQueryClient';
import store from '../../redux/store';

const placeholder = /Search for your favourite Star Wars Hero/i;

describe('SearchForm', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={reactQueryClient}>
          <ThemeProvider>
            <Router>
              <SearchForm />
            </Router>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    );
  });

  test('should display an input text field', () => {
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('should display text as entered by user (custom hook useForm)', () => {
    const input = screen.getByPlaceholderText(placeholder);

    expect((input as HTMLInputElement).value).toBe('');
    fireEvent.change(input, { target: { value: 'Luke' } });
    expect((input as HTMLInputElement).value).toBe('Luke');
  });
});
