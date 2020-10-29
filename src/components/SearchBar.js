import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  // search term state variable
  const [searchTerm, setSearchTerm] = useState("Eminem");

  const handleChange = (event) => setSearchTerm(event.target.value);

  // call hit Youtube API function in parent component when user pressess enter
  const onKeyPress = (event) => {

    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }

  }

  return (

    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>

  );

}
