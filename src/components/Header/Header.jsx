import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledHeader from './Header.styled';
import { setTheme } from '../../redux/actions';

export default function Header() {
  const themeStatus = useSelector((state) => state.theme === 'dark' || false);
  const dispatch = useDispatch();

  function handleThemeSwitch({ target }) {
    if (target.checked) return dispatch(setTheme('dark'));
    return dispatch(setTheme('light'));
  }

  return (
    <StyledHeader>
      <h1>Header</h1>
      <label htmlFor="theme-switch">
        <input type="checkbox" id="theme-switch" checked={themeStatus} onChange={handleThemeSwitch} />
      </label>
    </StyledHeader>
  );
}
