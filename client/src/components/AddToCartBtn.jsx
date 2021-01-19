import { useState } from "react";
import { baseStyles } from "styles/baseStyles";

export default function AddToCart({ state = 0, action }) {
  const [value, setValue] = useState(state);

  const add = (e) => {
    setValue(value + 1);
  };
  const remove = (e) => {
    setValue(value - 1);
  };

  if (value == 0)
    return (
      <div className="no-select" onClick={add} style={btnWrapper}>
        Add &nbsp; +
      </div>
    );
  else
    return (
      <div className="no-select" style={counterWrapper}>
        <span style={smallBtnL} onClick={remove}>
          -
        </span>
        {value}
        <span style={smallBtnR} onClick={add}>
          +
        </span>
      </div>
    );
}
const btn = {
  padding: "4px 10px",
  display: "inline",
  borderRadius: "15px",
  cursor: "pointer",
  fontSize: "14px",
};

const btnWrapper = {
  ...btn,
  backgroundColor: baseStyles.primaryColor,
};

const counterWrapper = {
  ...btn,
  backgroundColor: baseStyles.textColor,
  color: baseStyles.backgroundColor,
};
const smallBtnL = {
  padding: "0 15px 0 0",
};
const smallBtnR = {
  padding: "0 0 0 15px",
};
