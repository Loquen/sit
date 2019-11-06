import React, { Component }from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import moment from 'moment';
import Filter from '../../components/Filter/Filter';
import Stats from '../../components/Stats/Stats'; // FUTURE DEV
import dayService from '../../utils/dayService';

import './VisualizePage.css';

class VisualizePage extends Component {
  state = {
    days: [],
    yearSelected: true,
    monthSelected: false,
    weekSelected: false
  }

  /********* L I F E C Y C L E ********/
  
  async componentDidMount(){
    let days = await dayService.getAllDays(this.props.user);

    days.reverse();
    // We need to parse the data through a helper function
    let yearData = this.populateYearData(days);
    let monthData = this.populateMonthData(days);
    let weekData = this.populateWeekData(days);

    this.setState({
      days: days,
      yearData: yearData,
      monthData: monthData,
      weekData: weekData
    }, () => console.log(this.state.monthData));
  }

  /********* C L I C K  H A N D L E R S *********/

  handleSelector = (evt) => {
    evt.preventDefault();
    this.setState({
      yearSelected: false,
      monthSelected: false,
      weekSelected: false,
      [evt.target.id]: true
    })
  }

  /********* H E L P E R  F U N C T I O N S **********/
  
  populateYearData(daysList) {
    let today = {
      year: moment().year(), 
      month: moment().month(),
      day: moment().date()
    };
    let yearData = [
      { month: 'Jan', totalTime: 0 },
      { month: 'Feb', totalTime: 0 },
      { month: 'Mar', totalTime: 0 },
      { month: 'Apr', totalTime: 0 },
      { month: 'May', totalTime: 0 },
      { month: 'Jun', totalTime: 0 },
      { month: 'Jul', totalTime: 0 },
      { month: 'Aug', totalTime: 0 },
      { month: 'Sep', totalTime: 0 },
      { month: 'Oct', totalTime: 0 },
      { month: 'Nov', totalTime: 0 },
      { month: 'Dec', totalTime: 0 }
    ]

    daysList.forEach(day => {
      if(day.date.year === today.year){
        yearData[day.date.month].totalTime += day.totalTime
      }
    });
      
    return yearData;
  }

  populateMonthData(daysList) {
    let today = {
      year: moment().year(), 
      month: moment().month(),
      day: moment().date()
    };
    let monthData = [
      { date: 1, totalTime: 0 },
      { date: 2, totalTime: 0 },
      { date: 3, totalTime: 0 },
      { date: 4, totalTime: 0 },
      { date: 5, totalTime: 0 },
      { date: 6, totalTime: 0 },
      { date: 7, totalTime: 0 },
      { date: 8, totalTime: 0 },
      { date: 9, totalTime: 0 },
      { date: 10, totalTime: 0 },
      { date: 11, totalTime: 0 },
      { date: 12, totalTime: 0 },
      { date: 13, totalTime: 0 },
      { date: 14, totalTime: 0 },
      { date: 15, totalTime: 0 },
      { date: 16, totalTime: 0 },
      { date: 17, totalTime: 0 },
      { date: 18, totalTime: 0 },
      { date: 19, totalTime: 0 },
      { date: 20, totalTime: 0 },
      { date: 21, totalTime: 0 },
      { date: 22, totalTime: 0 },
      { date: 23, totalTime: 0 },
      { date: 24, totalTime: 0 },
      { date: 25, totalTime: 0 },
      { date: 26, totalTime: 0 },
      { date: 27, totalTime: 0 },
      { date: 28, totalTime: 0 },
      { date: 29, totalTime: 0 },
      { date: 30, totalTime: 0 },
      { date: 31, totalTime: 0 },
    ]

    daysList.forEach(day => {
      if(day.date.month === today.month){
        monthData[day.date.day - 1].totalTime += day.totalTime
      }
    });
      
    return monthData;
  }

  populateWeekData(daysList) {   
    let weekData = [
      { date: 1, totalTime: 0 },
      { date: 2, totalTime: 0 },
      { date: 3, totalTime: 0 },
      { date: 4, totalTime: 0 },
      { date: 5, totalTime: 0 },
      { date: 6, totalTime: 0 },
      { date: 7, totalTime: 0 },
    ]

    daysList.forEach((day, i) => {
      if(i < 7){
        weekData[i].totalTime = day.totalTime;
        weekData[i].date = `${moment().month(day.date.month - 1).format('MMM')} ${day.date.day}`;
      }
    });

    return weekData;
  }

  render(){
    return (
      <div className='visualize-container'>
        <Filter 
          filterValue={this.props.filterValue}
          handleFilterChange={this.props.handleFilterChange}
          handleFilterSubmit={this.props.handleFilterSubmit}
          handleSelector={this.handleSelector}
          yearSelected={this.state.yearSelected}
          monthSelected={this.state.monthSelected}
          weekSelected={this.state.weekSelected}
        />
        { this.state.yearSelected ? ( 
          <BarChart
            width={500}
            height={300}
            data={this.state.yearData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='totalTime' fill='#8884d8' />
          </BarChart>
        ) : null }
        { this.state.monthSelected ? ( 
          <BarChart
            width={500}
            height={300}
            data={this.state.monthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='totalTime' fill='#8884d8' />
          </BarChart>
        ) : null }
        { this.state.weekSelected ? ( 
          <BarChart
            width={500}
            height={300}
            data={this.state.weekData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='totalTime' fill='#8884d8' />
          </BarChart>
        ) : null }
        {/* 
        <Stats /> 
        */}        
      </div>
    );
  }
}

export default VisualizePage;