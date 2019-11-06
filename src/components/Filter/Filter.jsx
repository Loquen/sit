import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Filter = (props) => {
  return (
    <>
      <ButtonGroup size='lg'>
        <Button 
          variant='secondary' 
          size='lg' 
          active={props.yearSelected} 
          onClick={ props.handleSelector } 
          className='Selector-btn' 
          id='yearSelected'
        >
          Year
        </Button>
        <Button 
          variant='secondary' 
          size='lg' 
          active={props.monthSelected} 
          onClick={ props.handleSelector } 
          className='Selector-btn' 
          id='monthSelected'
        >
          Month
        </Button>
        <Button variant='secondary' size='lg' active={props.weekSelected} onClick={ props.handleSelector } className='Selector-btn' id='weekSelected'>
          Last 7 Days
        </Button>
      </ButtonGroup>
      
      {/* FUTURE DEV: filter specific year, month or week on selection
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
      </form> */}
    </>
  );
}

export default Filter;