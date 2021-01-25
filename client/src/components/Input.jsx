import { baseStyles } from "styles/baseStyles";

export default function Input({
  width = "190px",
  type = "text",
  size = "m",
  theme = "dark",
  placeholder = "",
  ...props
}) {
  const inputStyle = {
    height: size == "m" ? "35px" : size == "s" ? "25px" : size == "l" ? "40px" : "30px",
    color: theme == "dark" ? baseStyles.backgroundColor : baseStyles.textColor,
    backgroundColor: theme == "dark" ? baseStyles.textColor : baseStyles.backgroundColorLight,
    width: width,
  };

  return (
    <div className="input">
      <input {...props} className="input-bar" type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}
