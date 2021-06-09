import React from "react";
import { TextField, TextFieldProps, withStyles } from "@material-ui/core";
import modules from "../../modules";
import { globalStyles } from "../../style/globalStyles";

const TextInput = (props: TextFieldProps): React.ReactElement => {
  return (
    <>
      <FormInput
        autoComplete="off"
        style={globalStyles.textInput}
        variant="outlined"
        {...props}
        inputProps={{
          style: {
            height: 45,
            padding: "0 12px",
            margin: 0,
            borderRadius: modules.BORDER_RADIUS * 2,
          },
        }}
        InputLabelProps={{
          style: {
            height: 45,
            borderRadius: modules.BORDER_RADIUS * 2,
          },
        }}
      />
      <div style={{ height: modules.MARGIN * 1.5 }}>
        {props.error ? (
          <p style={globalStyles.textInputError}>
            {props.label ? props.label : "Field"} is required!
          </p>
        ) : null}
      </div>
    </>
  );
};

export default TextInput;

export const FormInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: modules.TEXT_COLOR,
      top: "-4px",
    },
    "& .MuiInput-underline:after": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: modules.BORDER_COLOR,
        borderRadius: modules.BORDER_RADIUS,
        color: modules.TEXT_COLOR,
      },

    },
    "& .MuiOutlinedInput-input": {
      color: modules.BLACK,
    },
    "& .MuiInputLabel-root": {
      color: modules.TEXT_COLOR,
      top: "-4px",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline  .Mui-error": {
      borderColor: modules.RED,
    },
    "&:hover .MuiOutlinedInput-input": {
      color: modules.COLOR_MAIN,

      borderColor: modules.SUB_TITLE,
    },
    "&:hover .MuiInputLabel-root": {
      color: modules.COLOR_MAIN,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: modules.COLOR_MAIN,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: modules.BLACK,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: modules.TEXT_COLOR,
      top: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: modules.SUB_TITLE,
      color: modules.BLACK,
    },
  },
})(TextField);
