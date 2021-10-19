import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledMain;
