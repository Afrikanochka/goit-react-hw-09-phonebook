import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

import s from './Navigation.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated)
  return (
    <div className={s.container}>
      <NavLink className={s.link} 
      activeClassName={s.link_active} 
      exact to="/">
        Home
      </NavLink>
      {isAuthenticated && <NavLink
        className={s.link}
        activeClassName={s.link_active}
        to="/phonebook"
      >
        Phonebook
      </NavLink>}
      
    </div>
  );
};

export default Navigation;
