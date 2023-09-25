import React from "react";
import close from "./icon-menu-close.svg";

function Sidebar(props) {
  //   {
  //     !props.trigger
  //       ? (document.querySelector(".side-bar").style.animationName = "slidein")
  //       : (document.querySelector(".side-bar").style.animationName = "slideout");
  //   }
  return props.trigger ? (
    <div className="side-bar">
      <img
        className="closeNav"
        src={close}
        alt="closeBtn"
        onClick={props.setTrigger}
      ></img>
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
    </div>
  ) : (
    ""
  );
}

export default Sidebar;
