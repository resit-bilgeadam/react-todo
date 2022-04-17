import "./Toolbar.css";
import { useState } from "react";

function ToolbarItem({ children, to }) {
  return (
    <li className="toolbar-item">
      <a className="toolbar-link" href={to}>
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
    <nav className="toolbar">
      <a className="brand-logo" href="#">
        React App
      </a>

      <a onClick={toggleHamburger} className="hamburger-btn" href="#">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      {isHamburgerVisible ? (
        <ul className="hamburger-menu">
          <ToolbarItem to="#">Home</ToolbarItem>

          <ToolbarItem to="#">About</ToolbarItem>

          <ToolbarItem to="#">Contact Us</ToolbarItem>
        </ul>
      ) : null}

      <ul className="toolbar-list">
        <ToolbarItem to="#">Home</ToolbarItem>

        <ToolbarItem to="#">About</ToolbarItem>

        <ToolbarItem to="#">Contact Us</ToolbarItem>
      </ul>
    </nav>
  );
}

export default Toolbar;
