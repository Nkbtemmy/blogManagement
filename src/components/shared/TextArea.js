import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  placeholder,
  name,
  label,
  id,
  rows,
  cols,
  onChange,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="font-medium">{label}</span>
      <textarea
        name={name}
        rows={rows}
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 outline-none focus:border-brand-green w-full p-3 md:py-4 rounded-md border font-bold border-brand-gray placeholder:text-brand-gray placeholder:font-normal placeholder:text-xs"
      />
    </label>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onChange: PropTypes.func,
};
TextArea.defaultProps = {
  placeholder: 'Enter your Post body',
  label: 'Body',
  name: 'body',
  id: 'body',
  rows: 4,
  cols: 50,
  onChange: () => {},
};

export default TextArea;