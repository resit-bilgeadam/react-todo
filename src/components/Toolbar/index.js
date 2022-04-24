import s from "./Toolbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function ToolbarItem({ children, to }) {
  return (
    <li className={s.toolbarItem}>
      <Link className={s.toolbarLink} to={to}>
        {children}
      </Link>
    </li>
  );
}

function Toolbar() {
  const [isHamburgerVisible, setHamburgerVisible] = useState(false);

  const toggleHamburger = () => {
    setHamburgerVisible(!isHamburgerVisible);
  };

  return (
    <nav className={s.toolbar}>
      <Link className={s.brandLogo} to="/">
        React App
      </Link>

      <a onClick={toggleHamburger} className={s.hamburgerBtn} href="#">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      {isHamburgerVisible ? (
        <ul className={s.hamburgerMenu}>
          <ToolbarItem to="/">Home</ToolbarItem>

          <ToolbarItem to="/counter">Counter</ToolbarItem>

          <ToolbarItem to="/todo-widget">Todo Widget</ToolbarItem>
        </ul>
      ) : null}

      <ul className={s.toolbarList}>
        <ToolbarItem to="/">Home</ToolbarItem>

        <ToolbarItem to="/counter">Counter</ToolbarItem>

        <ToolbarItem to="/todo-widget">Todo Widget</ToolbarItem>
      </ul>
    </nav>
  );
}

export default Toolbar;
