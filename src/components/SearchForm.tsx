import { FormEvent, useState } from 'react';
import useForm from 'src/hooks/useForm';
import useSearchHero from 'src/hooks/useSearchHero';
import StyledForm from '../styled-components/StyledForm';

const SearchForm = (): JSX.Element => {
  const [{ search }, update, reset] = useForm({ search: '' });
  const [query, setQuery] = useState<string>('');

  useSearchHero(query);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setQuery(search);
    reset();
  };

  return (
    <StyledForm onSubmit={submit}>
      <input
        id="searchInput"
        aria-label="Search Input"
        type="text"
        name="search"
        value={search}
        onChange={update}
        placeholder="Search for your favourite Star Wars Hero"
      />
      <button type="submit">search</button>
    </StyledForm>
  );
};

export default SearchForm;
