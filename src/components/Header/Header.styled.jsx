import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};

  padding: .6em .6em 0 .6em;

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  .theme-toggle {
    display: flex;
    flex-direction: column;
    max-width: 6em;
    min-height: 3em;
    justify-content: space-between;
    margin: 0 0 1em auto;
    align-items: center;
  }
    /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 23px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.foreground};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 2px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.background};
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.foreground};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider {
    border-radius: 34px;
  }

  .slider:before {
    border-radius: 50%;
  }
`;

export default StyledHeader;
