import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFilterSubmit}>
        <label>
          Filter Your Meditations:
          <select value={props.filterValue} onChange={props.handleFilterChange}>
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="week">Week</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Filter;