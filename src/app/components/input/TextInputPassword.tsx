/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  withStyles,
} from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import modules from "../../modules";
import { globalStyles } from "../../style/globalStyles";

const TextInputPassword = (props: TextFieldProps): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <FormInput
        autoComplete="off"
        style={globalStyles.textInputPassword}
        variant="outlined"
        {...props}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Icon.Visibility /> : <Icon.VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            height: 45,
            padding: "0 12px",
            margin: 0,
            width: "100%",
          },
        }}
        InputLabelProps={{
          style: {
            height: 45,
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

export default TextInputPassword;

export const FormInput = withStyles({
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
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline  .Mui-error": {
      borderColor: modules.RED,
    },
    "& .MuiOutlinedInput-root ": {
      backgroundColor: modules.WHITE,
      color: modules.TEXT_COLOR,
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
