export const sortByName = (a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const getTitle = category => {
  switch (category) {
    case "population":
      return "Population";
    case "rotation_period":
      return "Rotation Period";
    case "orbital_period":
      return "Orbital Period";
    case "diameter":
      return "Diameter";
    case "climate":
      return "Climate";
    case "surface_water":
      return "Surface Water";
    default:
      return "Population";
  }
};
