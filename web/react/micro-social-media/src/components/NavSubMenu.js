import React from "react";

import "./navsubmenu.css";

const NavSubMenu = props => {
  let classes = ["submenu"];

  if (props.show) {
    classes = ["submenu", "open"];
  }

  return (
    <nav className={classes.join(" ")} role="navigation">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">support</a>
        </li>
        <li>
          <a href="#">register</a>
        </li>
        <li>
          <a href="#">login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSubMenu;
