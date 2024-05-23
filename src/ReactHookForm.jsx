import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

export function ReactHookForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  function onSubmit() {
    window.alert("Form would submit to server here");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="material-fields">
        <TextField
          error={!!errors.requiredField}
          helperText={errors.requiredField?.message}
          id="requiredfield"
          label="Required Field *"
          variant="outlined"
          {...register("requiredField", { required: "This field is required." })}
        />
        <TextField
          error={!!errors.requiredEmailField}
          helperText={errors.requiredEmailField?.message}
          id="requiredemailfield"
          label="Required Email Field *"
          inputMode="email"
          variant="outlined"
          {...register("requiredEmailField", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address.",
            },
            required: 'This field is required.',
          })}
        />
        <TextField
          error={!!errors.optionalEmailField}
          helperText={errors.optionalEmailField?.message}
          id="optionalemailfield"
          label="Optional Email Field"
          inputMode="email"
          variant="outlined"
          {...register("optionalEmailField", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address.",
            }
          })}
        />
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
