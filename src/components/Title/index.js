import "./Title.css";

function Title(props) {
  const style = {
    color: props.color,
  };

  return (
    <h1 className={`title ${props.background}`} style={style}>
      {props.children} - {4 - 3}
    </h1>
  );
}

export default Title;
