import React from "react";

const Creator = (props) => {
  return (
    <div className="creator">
      <p>Name: {props.name}</p>
      <p>
        Email: <a href={"mailto:"+ props.email}>{props.email}</a>
      </p>
    </div>
  );
};

export default Creator;
