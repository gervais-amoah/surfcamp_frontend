import React from 'react';

export default function TextInput({
  inputName,
  inputType,
  label,
  value,
  onChange,
}) {
  return (
    <div className="input__container">
      <label htmlFor={inputName} className="copy">
        {label}
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
        className="input input__text input--beige"
      />
    </div>
  );
}
