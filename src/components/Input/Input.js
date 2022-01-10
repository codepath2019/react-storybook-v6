import "./Input.css";

const Input = ({ labelText, onChange, value }) => (
  <label className="inputContainer">
    <span className="labelText">{labelText}</span>
    <input
      className="styledInput"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export default Input;
