import React from "react";

const Button = ({
  title,
  bgColor = "bg-blue",
  textColor,
  hoverBgColor,
  extraClass,
}) => {
  return (
    <button
      className={`${bgColor} hover:${hoverBgColor} ${textColor} font-bold py-2 rounded w-32 ${extraClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
