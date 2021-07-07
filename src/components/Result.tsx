/* eslint-disable camelcase */
import { RootState } from 'src/redux/store';
import StyledHeader from 'src/styled-components/StyledHeader';
import StyledLoadingImage from '../styled-components/StyledLoadingImage';
import StyledResult from '../styled-components/StyledResult';

const Result = ({
  result: { loading, error, data },
}: {
  result: RootState;
}): JSX.Element => {
  if (loading) {
    const { PUBLIC_URL } = process.env;
    return <StyledLoadingImage src={`${PUBLIC_URL}/logo512.png`} alt="Logo" />;
  }
  if (error) {
    return <pre>{error.message}</pre>;
  }
  return (
    <StyledResult>
      {(data?.results || []).map(
        ({ name, gender, birth_year, height, mass, hair_color }) => (
          <article key={name}>
            <StyledHeader>{name}</StyledHeader>
            <dl>
              <dt>Gender</dt>
              <dd>{gender}</dd>
              <dt>Birth Year</dt>
              <dd>{birth_year}</dd>
              <dt>Height</dt>
              <dd>{height}</dd>
              <dt>Mass</dt>
              <dd>{mass}</dd>
              <dt>Hair Colour</dt>
              <dd>{hair_color}</dd>
            </dl>
          </article>
        )
      )}
    </StyledResult>
  );
};

export default Result;
