import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ title, url }) => {
  //RouterLink direccionara a title hacia la ruta que establezca URL.

  return (
    <li className="nav-item">
      <RouterLink to={url} className="nav-link active text-white">
        {title}
      </RouterLink>
    </li>
  );
};

export default Link;
