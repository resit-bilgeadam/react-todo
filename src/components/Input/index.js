import "./Input.css";

function Input({ id, label, placeholder, type = "text", handleChange, value }) {
  return (
    <div className="form-group">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
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
