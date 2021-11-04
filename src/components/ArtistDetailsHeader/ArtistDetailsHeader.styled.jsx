import styled from 'styled-components';

const ArtistDetailsHeaderStyled = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: 1em;
  h1 {
    margin-bottom: .3em;
  }

`;

export default ArtistDetailsHeaderStyled;
