import React, { Component }from 'react';
import moment from 'moment';
import Filter from '../../components/Filter/Filter';
import Stats from '../../components/Stats/Stats';
import dayService from '../../utils/dayService';

class VisualizePage extends Component {
  state = {
    days: []
  }

  /********* L I F E C Y C L E ********/
  async componentDidMount(){
    let days = await dayService.getAllDays(this.props.user);
    console.log(days);

    // We need to parse the data through a helper function
    let yearData = this.populateYearData(days);

    this.setState({
      days: days,
      yearData: yearData
    }, () => console.log(this.state.yearData));
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
    // FORMAT of daysLIst
    // date: Object { year: 2019, month: 9, day: 8 }
    // ​​
    // sessions: Array []
    // ​​
    // totalTime: 200

    daysList.forEach(day => {
      if(day.date.year === today.year){
        yearData[day.date.month].totalTime += day.totalTime
      }
    });
      
    // console.log(yearData);
    return yearData;
  }

  render(){
    return (
      <div>
        VisualizePage 
        <Filter 
          filterValue={this.props.filterValue}
          handleFilterChange={this.props.handleFilterChange}
          handleFilterSubmit={this.props.handleFilterSubmit}
        />
        Chart Goes Here
        <Stats />
        
      </div>
    );
  }
}

export default VisualizePage;