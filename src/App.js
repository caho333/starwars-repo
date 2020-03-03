import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      let planetArray = [];
      let populationArray = [];
      let retrievedData = res.data.results;
      console.log({ retrievedData });
      retrievedData.forEach(planet => {
        planetArray.push(planet.name);
        populationArray.push(planet.population);
      });
      console.log({ planetArray });
      console.log({ populationArray });
      this.setState({
        x: planetArray,
        y: populationArray
      });
    });
  }
  render() {
    return (
      <div className='App container mt-5'>
        <h2>StarWars Info Guide</h2>
        {this.state && (
          <Chart
            x={this.state.x && this.state.x}
            y={this.state.y && this.state.y}
          />
        )}
      </div>
    );
  }
}

export default App;
