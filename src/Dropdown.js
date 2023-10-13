import React, { useState, useCallback } from 'react';
import './Dropdown.css'

function Dropdown({ options, multiSelect = false, onSelect, defaultValue = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = useCallback((option) => {
        if (multiSelect) {
            if (selected.includes(option)) {
                setSelected(prev => prev.filter(item => item !== option));
            } else {
                setSelected(prev => [...prev, option]);
            }
        } else {
            setSelected([option]);
            setIsOpen(false);
        }

        onSelect && onSelect(selected);
    }, [multiSelect, selected, onSelect]);

    const handleSelectAll = useCallback(() => {
        setSelected(options);
    }, [options]);

    const handleDeselectAll = useCallback(() => {
        setSelected([]);
    }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selected.length ? selected.join(', ') : 'Select option(s)'}
            </button>
            {isOpen && (
                <ul className="options-list">
                    {multiSelect && (
                        <li className="actions-container">
                            <button onClick={handleSelectAll}>Select All</button>
                            {selected.length > 0 && (
                            <button onClick={handleDeselectAll}>Deselect All</button>
                            )}
                        </li>
                    )}
                    {options.map(option => (
                        <li key={option}>
                            <div onClick={() => handleSelect(option)} className="option-container">
                                {multiSelect && (
                                    <input 
                                        type="checkbox" 
                                        checked={selected.includes(option)}
                                        readOnly // This makes the checkbox purely visual and controlled by the div click
                                    />
                                )}
                                <span>{option}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}

export default Dropdown;
