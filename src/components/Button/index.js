import styles from "./Button.module.scss";

function Button({ children, handleClick, color = "primary", type = "button" }) {
  const classes = `${styles.btn} ${styles[color]}`;

  return (
    <button type={type} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
