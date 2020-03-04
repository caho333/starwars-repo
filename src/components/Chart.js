import React from "react";
import PropTypes from "prop-types";
import { getTitle } from "../helper/helperFunctions";
import Plotly from "plotly.js/lib/index-basic";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const Chart = ({ planets, category }) => {
  let x = planets.map((planet, index) => planet.name);
  let y = planets.map((planet, index) => planet[`${category}`]);
  let title = getTitle(category);
  return (
    <Plot
      data={[{ type: "bar", x: x, y: y }]}
      layout={{
        width: 1000,
        height: 500,
        title: `Planets' ${title}`,
        yaxis: {
          title: `${title}`,
          automargin: true,
          titlefont: { size: 30 }
        },
        xaxis: {
          title: "Planets",
          automargin: true,
          titlefont: { size: 30 },
          type: "category"
        }
      }}
    />
  );
};

Chart.propTypes = {
  planets: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
};

export default Chart;
