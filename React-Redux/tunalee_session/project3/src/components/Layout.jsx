import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={style.layout__header}>
        <div className={style.gnb}>
          <ul className={style.layout__ul}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contents">Contents</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
