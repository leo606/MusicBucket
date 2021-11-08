import styled from 'styled-components';

const ArtistInfoSectionStyled = styled.section`
  padding: 0.6em;

  dl {
    display: grid;
    grid-gap: 0.3em 1em;
    max-width: 300px;
  }
  dt {
    grid-column-start: 1;
    margin: auto;
  }
  dd {
    grid-column-start: 2;
    margin: auto 0;
  }
`;

export default ArtistInfoSectionStyled;
