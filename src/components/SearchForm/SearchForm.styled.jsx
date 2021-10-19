import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  input {
    background-color: ${({ theme }) => theme.foreground};
    color: ${({ theme }) => theme.background};
    padding: 6px;
    border: none;
    border-radius: .3em;
  }

  input[type=button] {
    font-weight: 600;
    font-size: 1.3em;
  }

  input[type=radio] {
    margin-right: 0.6em;
  }

  div {
    margin: 0.6em 0;
    display: flex;
    justify-content: space-around;
  }

  label {
    font-size: 1.3em;
  }
`;

export default StyledSearchForm;
