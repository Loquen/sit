import React, { Component }from 'react';
import Filter from '../../components/Filter/Filter';
import Stats from '../../components/Stats/Stats';
import dayService from '../../utils/dayService';

class VisualizePage extends Component {

  componentDidMount(){
    // dayService.filterDays();
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