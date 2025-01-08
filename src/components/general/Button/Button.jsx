import React from "react";

const Button = ({label}) => {
  return (
    <button class="btn btn-outline-danger" type="submit">
      {label}
    </button>
  );
};

export default Button;
