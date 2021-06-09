import React from "react";
import { TextField, TextFieldProps, withStyles } from "@material-ui/core";
import modules from "../../modules";
import { globalStyles } from "../../style/globalStyles";

const TextInputSearch = (props: TextFieldProps): React.ReactElement => {
  return (
    <Input
      autoComplete="off"
      style={globalStyles.textInput}
      variant="outlined"
      name="width"
      {...props}
      inputProps={{
        style: {
          height: 35,
          padding: "0 12px",
          margin: 0,
        },
      }}
      InputLabelProps={{
        style: {
          height: 35,
        },
      }}
    />
  );
};

export default TextInputSearch;

const Input = withStyles({
  root: {
    "& label.Mui-focused": {
      color: modules.TEXT_COLOR,
      top: "-4px",
    },
    "& .MuiInput-underline:after": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: modules.TEXT_COLOR,

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
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: modules.BORDER_COLOR,
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
