import React from "react";

function Content(props) {
  const style1 = {
    borderBottom: "1px solid hsl(236, 13%, 42%)",
  };
  const style2 = {
    borderBottom: "none",
  };
  return (
    <div className="right-text-content">
      <h3>{props.name}</h3>
      <p style={props.status ? style1 : style2}>{props.info}</p>
    </div>
  );
}
export default Content;
