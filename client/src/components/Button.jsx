export default function Button({style={} ,className = "", label = " ", size = "m", ...props }) {
  const buttonStyle = {
...style,
    fontSize: size == "s" ? "12px" : size == "m" ? "16px" : size == "l" ? "18px" : "16px",
  };

  

  return (
    <div className="button">
      <button style={buttonStyle} className={"btn " + className} {...props}>
        {label}
      </button>
    </div>
  );
}
