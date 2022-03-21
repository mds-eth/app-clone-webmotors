import React from 'react';

function Select({ value, id, name, label, onChange, options, ...props }) {
   return (
      <select onChange={onChange} value={value} id={id} name={name} {...props}>
         <option defaultValue>{label}</option>
         {options.map(option => (
            <option key={option.ID} value={option.ID}>{option.Name}</option>
         ))}
      </select>
   )
}

export default Select;