import axios from "axios";

export const getAllPlanets = (endpoint, planetsArray, resolve, reject) => {
  axios
    .get(endpoint)
    .then(res => {
      res.data.results.forEach(planet => {
        planetsArray.push(planet);
      });
      // if statement is for checking whether or not we reached
      // then end og the paginated endpoints
      if (res.data.next !== null) {
        getAllPlanets(res.data.next, planetsArray, resolve, reject);
      } else {
        resolve(planetsArray);
      }
    })
    .catch(error => {
      console.log(error);
      reject("The force is not with us, please refresh and try again!");
    });
};
