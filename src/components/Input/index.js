import s from "./Input.module.scss";

function Input({ id, label, placeholder, type = "text", handleChange, value }) {
  return (
    <div className={s.formGroup}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={s.input}
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Input;
