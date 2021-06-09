import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import modules from "../../modules";
import { globalStyles } from "../../style/globalStyles";

const SelectOption = (props: any): React.ReactElement => {
    return (
        <>
            <Input
                autoComplete="off"
                style={globalStyles.textInput}
                variant="outlined"
                name="width"
                select
                SelectProps={{
                    style: {
                        height: 45,
                        margin: 0,
                        borderRadius: modules.BORDER_RADIUS,
                    },
                }}
                {...props}
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

export default SelectOption;

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
                borderRadius: modules.BORDER_RADIUS,
            },
        },
        "& .MuiOutlinedInput-input": {
            color: modules.BLACK,
            height: 45,
            margin: 0,
            padding: 0,
            top: "24px",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            paddingLeft: modules.PADDING,
            borderRadius: modules.BORDER_RADIUS,
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
