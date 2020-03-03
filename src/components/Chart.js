import React, { Component } from "react";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Chart extends Component {
  render() {
    const { x, y } = this.props;
    console.log({ x });
    console.log({ y });
    return (
      <Plot
        data={[{ type: "bar", x: x, y: y }]}
        layout={{ width: 900, height: 500, title: "Planet Population" }}
      />
    );
  }
}
export default Chart;
