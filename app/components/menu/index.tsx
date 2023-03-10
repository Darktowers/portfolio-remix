import type { FC } from "react";

import { NavLink } from "@remix-run/react";

import styles from "~/styles/components/menu/index.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const Menu: FC = () => {
  return (
    <nav className="menu">
      <ul className="menu-main">
        <NavLink to="/" className="menu-main-item" >
          <span className="menu-main-item-ani"></span>
          <i className="fa-brands fa-phoenix-squadron"></i>
          <span className="text">Home</span>
        </NavLink>
        <NavLink to="/about" className="menu-main-item">
          <span className="menu-main-item-ani"></span>
          <i className="fa-solid fa-user-astronaut"></i>
          <span className="text">About</span>
        </NavLink>
        <NavLink to="/my-work" className="menu-main-item">
          <span className="menu-main-item-ani"></span>
          <i className="fa-solid fa-code"></i>
          <span className="text">My Work</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
