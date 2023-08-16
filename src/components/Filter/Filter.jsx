import React from 'react';

export const Filter = ({ onFilterInput, value }) => {
  return (
    <input
      type="text"
      name="filter"
      required
      value={value}
      onChange={onFilterInput}
    />
  );
};
