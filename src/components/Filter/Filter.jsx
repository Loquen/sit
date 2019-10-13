import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Filter = (props) => {
  return (
    <div>
      <ButtonGroup size="lg">
        <Button variant="primary" size="lg" active onClick={ props.handleSelector } className="Selector-btn" id="yearSelected">
          <div id="yearSelected" className={props.yearSelected ? ("Selected") : (null)}> Year </div>
        </Button>
        <Button variant="primary" size="lg" active onClick={ props.handleSelector } className="Selector-btn" id="monthSelected">
          <div id="monthSelected" className={props.monthSelected ? ("Selected") : (null)}> Month </div>
        </Button>
        <Button variant="primary" size="lg" active onClick={ props.handleSelector } className="Selector-btn" id="weekSelected">
          <div id="weekSelected" className={props.weekSelected ? ("Selected") : (null)}> Week </div>
        </Button>
      </ButtonGroup>
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