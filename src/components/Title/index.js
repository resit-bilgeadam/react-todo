import s from "./Title.module.scss";

function Title(props) {
  const style = {
    color: props.color,
  };

  return (
    <h1 className={`${s.title} ${s[props.background]}`} style={style}>
      {props.children} - {4 - 3}
    </h1>
  );
}

export default Title;
