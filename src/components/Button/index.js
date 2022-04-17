import "./Button.css";

function Button({ children, handleClick, color = "primary", type = "button" }) {
  const classes = `btn ${color}`;

  return (
    <button type={type} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
