import React, { useState } from "react";

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import {
  useApplication,
  FAHRENHEIT,
  CELSIUS,
  KELVIN,
} from "../services/Application";

const Controls = () => {
  const { application, setUnit } = useApplication();
  const [value, setValue] = useState(application.unit);
  const handleChange = (e) => {
    setValue(e.target.value);
    setUnit(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="temperature"
        name="temperature"
        value={value}
        onChange={handleChange}
        data-testid="radioGroup"
      >
        <FormControlLabel
          value={FAHRENHEIT}
          control={<Radio />}
          label="Fahrenheit"
          data-testid="fahrenheit"
        />
        <FormControlLabel
          value={CELSIUS}
          control={<Radio />}
          label="Celsius"
          data-testid="celsius"
        />
        <FormControlLabel
          value={KELVIN}
          control={<Radio />}
          label="Kelvin"
          data-testid="kelvin"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Controls;
