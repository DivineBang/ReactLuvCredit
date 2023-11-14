import React, { useState } from 'react';

function CustomSelect({ options, placeholder, onSelect }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
