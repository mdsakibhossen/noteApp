import React from "react";

const Creator = (props) => {
  return (
    <div className="creator text-slate-300 bg-slate-800 p-3 rounded-md">
      <p className="flex gap-2">
        <span className="text-orange-600">Name: </span>{props.name}
      </p>
      <p className="flex gap-2">
        <span className="text-orange-600">Email: </span>
        <a className="hover:text-blue-500 transition-all" href={"mailto:" + props.email}>{props.email}</a>
      </p>
    </div>
  );
};

export default Creator;
