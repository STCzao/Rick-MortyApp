import React from "react";

const Link = ({title}) => {
  return (
    <li className="nav-item">
      <a className="nav-link active text-white" aria-current="page" href="#">
        {title} 
      </a>
    </li>
  );
};

export default Link;
