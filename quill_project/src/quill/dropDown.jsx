import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="ql-custom-dropdown">
      <button onClick={toggleDropdown}>{selectedValue}</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
