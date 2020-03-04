import React, { Component, Fragment } from "react";
import "./App.css";
import { getAllPlanets } from "./helper/api";
import Chart from "./components/Chart";
import StickyHeadTable from "./components/Table";

class App extends Component {
  componentDidMount() {
    let planets = [];
    new Promise((resolve, reject) => {
      getAllPlanets("https://swapi.co/api/planets/", planets, resolve, reject);
    }).then(res => {
      this.setState({
        planets: res
      });
    });
  }

  render() {
    return (
      <div className='App container mt-5'>
        <h2>StarWars Info Guide</h2>
        {this.state ? (
          <Fragment>
            <Chart planets={this.state.planets && this.state.planets} />
            <StickyHeadTable
              planets={this.state.planets && this.state.planets}
            />
          </Fragment>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default App;
