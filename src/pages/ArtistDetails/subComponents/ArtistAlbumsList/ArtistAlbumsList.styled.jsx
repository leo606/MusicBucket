import styled from 'styled-components';

const ArtistAlbumsListStyled = styled.section`
  padding: 0.6em;

  a {
    color: ${({ theme }) => theme.foreground};
  }

  h4 {
    margin: 1em 0;
    font-size: 1.6em;
  }

  ul {
    list-style: none;
  }

  li {
    margin: .3em 0;
  }
`;

export default ArtistAlbumsListStyled;
