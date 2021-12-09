import styled from 'styled-components';

const DetailsInfoSectionStyled = styled.section`
  padding: 0.6em;

  dl {
    display: grid;
    grid-gap: 0.3em 1em;
    max-width: max-content;
  }
  dt {
    grid-column-start: 1;
    margin-left: auto;
  }
  dd {
    grid-column-start: 2;
    overflow: auto;
    white-space: nowrap;
  }

  dd span {
    display: inline-block;
    background-color: ${({ theme }) => theme.foreground};
    color: ${({ theme }) => theme.background};
    text-align: center;
    border-radius: .3em;
    padding: .2em;
    margin: .6em .3em;
  }
`;

export default DetailsInfoSectionStyled;
