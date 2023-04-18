import React from 'react';

const FormInput = ({ name, value, placeholder, handleChange, ...props }) => {
  return (
    <div className="w-full text-gray-700 bg-white border-gray-300 rounded overflow-hidden">
      <input
        className="w-full px-4 text-xl py-2 bg-transparent border-transparent rounded"
        type={name}
        // name={name}
        // value={value}
        {...props}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
