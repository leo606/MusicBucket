import styled from 'styled-components';

const ReleaseHeaderStyled = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: .6em;

  h1 {
    font-size: 3em;
  }
`;

export default ReleaseHeaderStyled;
