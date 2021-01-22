import { baseStyles } from "styles/baseStyles";

export default function Input({width= '150px', type = "text", size = "m", theme = "dark", placeholder = "" }) {
  const inputStyle = {
    height: size == "m" ? "35px" : size == "s" ? "25px" : size == "l" ? "40px" : "30px",
    backgroundColor: baseStyles.backgroundColorLight,
    color: baseStyles.textColor,
outline:'none',
border:'none',
borderRadius:'5px',
padding:'4px 10px',
width:width,
  };

  return (
    <div className="no-select">
      <input className="no-select" type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}
