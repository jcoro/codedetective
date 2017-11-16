import React from 'react'
import PropTypes from 'prop-types'

const LanguagePicker = ({value, onChange, options }) => (
    <span>
    <div>Code Language</div>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
          <option value={option} key={option}>
              {option}
          </option>)
      }
    </select>
  </span>
);

LanguagePicker.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired
};

export default LanguagePicker