import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  placeholder,
  name,
  label,
  id,
  type,
  onChange,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 outline-none focus:border-brand-green w-full p-3 md:py-4 rounded-md border font-bold border-brand-gray placeholder:text-brand-gray placeholder:font-normal placeholder:text-xs"
      />
    </label>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
TextField.defaultProps = {
  placeholder: 'Type your post',
  label: 'Post',
  name: 'post',
  id: 'post',
  type: 'text',
  onChange: () => {},
};

export default TextField;