import { useState } from "react";
import React from "react";
import logo from "./logo.svg";
import icon from "./icon-menu.svg";
import "./nav.css";
import Sidebar from "../component/Sidebar";

function Nav() {
  const [button, setButton] = useState(false);
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo"></img>
        <Sidebar trigger={button} setTrigger={() => setButton(false)} />

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>

        <img
          className="openNav"
          src={icon}
          alt="icon"
          onClick={() => setButton(true)}
        ></img>
      </nav>
    </div>
  );
}
export default Nav;
