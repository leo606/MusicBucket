import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import StyledHeader from './Header.styled';
import { setTheme } from '../../redux/actions';

export default function Header() {
  const themeStatus = useSelector((state) => state.theme === 'dark');
  const dispatch = useDispatch();

  function handleThemeSwitch({ target }) {
    if (target.checked) return dispatch(setTheme('dark'));
    return dispatch(setTheme('light'));
  }

  return (
    <StyledHeader>
      <div className="title">
        <Link to="/">
          <img src="images/mb_icon_opt.svg" alt="" />
        </Link>
        <h1><Link to="/">Music Bucket</Link></h1>
      </div>
      <div className="theme-toggle">
        <span>
          Dark Theme:
          {' '}
          {themeStatus ? 'ON' : 'OFF'}
        </span>
        <label htmlFor="theme-switch" className="switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={themeStatus}
            onChange={handleThemeSwitch}
          />
          <span className="slider" />
        </label>
      </div>
    </StyledHeader>
  );
}
