import s from "./Toolbar.module.scss";
import { useState } from "react";

function ToolbarItem({ children, to }) {
  return (
    <li className={s.toolbarItem}>
      <a className={s.toolbarLink} href={to}>
        {children}
      </a>
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
      <a className={s.brandLogo} href="#">
        React App
      </a>

      <a onClick={toggleHamburger} className={s.hamburgerBtn} href="#">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      {isHamburgerVisible ? (
        <ul className={s.hamburgerMenu}>
          <ToolbarItem to="#">Home</ToolbarItem>

          <ToolbarItem to="#">About</ToolbarItem>

          <ToolbarItem to="#">Contact Us</ToolbarItem>
        </ul>
      ) : null}

      <ul className={s.toolbarList}>
        <ToolbarItem to="#">Home</ToolbarItem>

        <ToolbarItem to="#">About</ToolbarItem>

        <ToolbarItem to="#">Contact Us</ToolbarItem>
      </ul>
    </nav>
  );
}

export default Toolbar;
