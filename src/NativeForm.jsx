import * as React from "react";
import { Button, TextField } from "@material-ui/core";

export function NativeForm() {
  function handleSubmit(event) {
    window.alert("Form would submit to server here");
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="material-fields">
        <TextField
          id="native-requiredfield"
          label="Required Field"
          required
          variant="outlined"
        />
        <TextField
          id="native-requiredemailfield"
          label="Required Email Field"
          required
          type="email"
          variant="outlined"
        />
        <TextField
          id="native-optionalemailfield"
          label="Optional Email Field"
          type="email"
          variant="outlined"
        />
        <TextField
          id="native-requiredcustomfield"
          label="Required Field With Custom Message"
          required
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
