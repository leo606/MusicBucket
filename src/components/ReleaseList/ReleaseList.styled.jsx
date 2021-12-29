import styled from 'styled-components';

const ReleaseListStyled = styled.section`
  padding: 0.9em;

  h4 {
    margin: 1em 0;
    font-size: 1.6em;
  }

  ul, ol {
    list-style: none;
  }

  li {
    margin-bottom: 1em;
    font-weight: bold;
    max-width: 500px;
  }

  span {
    display: block;
    font-weight: normal;
    font-size: 0.8em;
    margin-top: 0.3em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default ReleaseListStyled;
