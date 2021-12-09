import styled from 'styled-components';

const LoadingMainStyled = styled.main`
  padding: 1em;
  div {
    border: .3em solid ${({ theme }) => theme.foreground};
    border-top: .3em solid ${({ theme }) => theme.background};
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 900ms linear infinite;
    margin: 1em auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default LoadingMainStyled;
