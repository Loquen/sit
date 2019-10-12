import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <button onClick={ props.handleSelector } className="Selector-btn" id="yearSelected">
        <div id="yearSelected" className={props.yearSelected ? ("Selected") : (null)}> Year </div>
      </button>
      <button onClick={ props.handleSelector } className="Selector-btn" id="monthSelected">
        <div id="monthSelected" className={props.monthSelected ? ("Selected") : (null)}> Month </div>
      </button>
      <button onClick={ props.handleSelector } className="Selector-btn" id="weekSelected">
        <div id="weekSelected" className={props.weekSelected ? ("Selected") : (null)}> Week </div>
      </button>
      {/* <form onSubmit={props.handleFilterSubmit}>
        <label>
          Filter Your Meditations:
          <select value={props.filterValue} onChange={props.handleFilterChange}>
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="week">Week</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default Filter;