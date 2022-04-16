import "./Button.css";

function Button(props) {
  return (
    <button type={props.type} className="btn" onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default Button;
