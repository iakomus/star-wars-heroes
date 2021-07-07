import StyledHeader from '../styled-components/StyledHeader';
import StyledPage from '../styled-components/StyledPage';
import StyledParagraph from '../styled-components/StyledParagraph';

const AboutComponent = (): JSX.Element => {
  return (
    <StyledPage>
      <StyledHeader>Tech Challenge</StyledHeader>
      <StyledParagraph>
        Small Single App that shows all the information related to a character
        from the Star Wars Universe.
      </StyledParagraph>
      <StyledParagraph>
        Users can submit the name of a character they are looking for in order
        to see all the relevant information in a dedicated area.
      </StyledParagraph>
    </StyledPage>
  );
};

export default AboutComponent;
