import React, { Component }from 'react';
import Filter from '../../components/Filter/Filter';
import Stats from '../../components/Stats/Stats';
import dayService from '../../utils/dayService';

class VisualizePage extends Component {
  state = {
    days: []
  }

  async componentDidMount(){
    let days = await dayService.getAllDays(this.props.user);
    console.log(days);
    this.setState({
      days: days
    });
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