import React, { Component, Fragment } from "react";
import "./App.css";
import { getAllPlanets } from "./helper/api";
import { sortByName } from "./helper/helperFunctions";
import Chart from "./components/Chart";
import StickyHeadTable from "./components/Table";
import SelectCategory from "./components/SelectCategory";

class App extends Component {
  componentDidMount() {
    let planets = [];
    let promise = new Promise((resolve, reject) => {
      getAllPlanets("https://swapi.co/api/planets/", planets, resolve, reject);
    });

    promise
      .then(planets => {
        planets.sort((a, b) => sortByName(a, b));
        this.setState({
          planets: planets,
          category: "population"
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateCategory = newCategory => {
    this.setState({ category: newCategory });
  };

  render() {
    return (
      <div className='App container mt-5'>
        <img
          src={process.env.PUBLIC_URL + "/starwarslogo.jpg"}
          alt='baby yoda'
          height='200'
          width='200'
        />
        <h2>StarWars Planet Guide</h2>
        {this.state ? (
          <Fragment>
            <SelectCategory
              category={this.state.category && this.state.category}
              updateCategory={this.updateCategory}
            />
            <Chart
              category={this.state.category}
              planets={this.state.planets && this.state.planets}
            />
            <h2>Planets' Info Table</h2>
            <StickyHeadTable
              planets={this.state.planets && this.state.planets}
            />
          </Fragment>
        ) : (
          <h3>Waiting on the Force...</h3>
        )}
      </div>
    );
  }
}

export default App;
