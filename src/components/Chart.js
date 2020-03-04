import React from "react";
import PropTypes from "prop-types";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const Chart = ({ planets }) => {
  console.log({ planets });
  let x = planets.map((planet, index) => planet[`name`]);
  let y = planets.map((planet, index) => planet.population);

  console.log({ x });

  console.log({ y });
  return (
    <Plot
      data={[{ type: "bar", x: x, y: y }]}
      layout={{
        width: 1000,
        height: 500,
        title: "Planet Population",
        yaxis: {
          title: "Population",
          automargin: true,
          titlefont: { size: 30 }
        },
        xaxis: { title: "Planets", automargin: true, titlefont: { size: 30 } }
      }}
    />
  );
};

Chart.propTypes = {
  planets: PropTypes.array.isRequired
};

export default Chart;
