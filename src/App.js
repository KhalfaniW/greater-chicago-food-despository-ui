import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux';
import { countyFetch } from './redux/countyReducer';
import { zipFetch } from './redux/zipReducer';

import ZoomToBoundsMenu from './components/ZoomToBoundsMenu';
import Map from './mapbox/Map'

class App extends Component {

  componentDidMount() {
    //dispatch is added to props automatically when connect is used without mapDispatchToProps
    //countyFetch and zipFetch are both async thunks from countyReducer.js and zipReducer.js, respectively
    //They dispatch the most current API call to the Redux store
    this.props.dispatch(countyFetch());
    this.props.dispatch(zipFetch());
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*Column 1: Left-hand menu (Zoom Control)*/}
          <nav className="menu col-2 pl-0 pr-0">
            <ZoomToBoundsMenu /> 
          </nav>

          {/*Column 2: MapBox map */}
          <div className="col pl-0 pr-0">
            <Map />
        
        
            {/* Righthand Map */}
            <div className="menu" id="right-menu">
                <div id="right-menu-county">
                    <h2>County Map</h2>
                    <label htmlFor="overall-poverty">
                        Overall Poverty
                        <input type="checkbox"  id="overall-poverty" name="overall-poverty" className="toggle" defaultChecked></input>
                    </label>

                    <label htmlFor="child-poverty">
                        Child Poverty
                        <input type="checkbox"  id="child-poverty" name="child-poverty" className="toggle" defaultChecked></input>
                    </label>

                </div>
                <div id="right-menu-zipcode">
                    <h2>Zipcode Map</h2>
                    <label htmlFor="group1">
                        Group 1
                        <input type="checkbox"  id="group1" name="group1" className="toggle"></input>
                    </label>

                    <label htmlFor="group2">
                        Group 2
                        <input type="checkbox"  id="group2" name="group2" className="toggle"></input>
                    </label>

                    <label htmlFor="group3">
                        Group 3
                        <input type="checkbox"  id="group3" name="group3" className="toggle"></input>
                    </label>

                    <label htmlFor="group4">
                        Group 4
                        <input type="checkbox"  id="group4" name="group4" className="toggle"></input>
                    </label>

                    <label htmlFor="group5">
                        Group 5
                        <input type="checkbox"  id="group5" name="group5" className="toggle"></input>
                    </label>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);