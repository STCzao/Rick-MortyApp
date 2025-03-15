import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({title, url}) => {
  return (
    <li className="nav-item">
      <RouterLink to={url} className="nav-link active text-white">
        {title}
      </RouterLink>
    </li>
  );
};

export default Link;
