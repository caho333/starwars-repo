import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const SelectCategory = ({ updateCategory, category }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    updateCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='controlled-open-select-label'>Category</InputLabel>
        <Select
          labelId='controlled-open-select-label'
          id='controlled-open-select'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={"population"}>Population</MenuItem>
          <MenuItem value={"rotation_period"}>Rotation Period</MenuItem>
          <MenuItem value={"orbital_period"}>Orbital Period</MenuItem>
          <MenuItem value={"diameter"}>Diameter</MenuItem>
          <MenuItem value={"climate"}>Climate</MenuItem>
          <MenuItem value={"surface_water"}>Surface Water</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

SelectCategory.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};

export default SelectCategory;
