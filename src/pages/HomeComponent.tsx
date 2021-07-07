import { useSelector } from 'react-redux';
import Result from 'src/components/Result';
import SearchForm from 'src/components/SearchForm';
import { RootState } from '../redux/store';
import StyledHeader from '../styled-components/StyledHeader';
import StyledPage from '../styled-components/StyledPage';

const HomeComponent = (): JSX.Element => {
  const loading = useSelector(
    (state: { result: RootState }) => state.result.loading
  );
  const error = useSelector(
    (state: { result: RootState }) => state.result.error
  );
  const data = useSelector((state: { result: RootState }) => state.result.data);

  return (
    <StyledPage>
      <StyledHeader>Search your Hero</StyledHeader>
      <SearchForm />
      <Result result={{ loading, error, data }} />
    </StyledPage>
  );
};

export default HomeComponent;
