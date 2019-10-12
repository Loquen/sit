import React, { Component }from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import moment from 'moment';
import Filter from '../../components/Filter/Filter';
import Stats from '../../components/Stats/Stats';
import dayService from '../../utils/dayService';

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

    // We need to parse the data through a helper function
    let yearData = this.populateYearData(days);

    this.setState({
      days: days,
      yearData: yearData
    }, () => console.log(this.state.yearData));
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
          handleSelector={this.handleSelector}
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
        
        
        <Stats />
        
      </div>
    );
  }
}

export default VisualizePage;