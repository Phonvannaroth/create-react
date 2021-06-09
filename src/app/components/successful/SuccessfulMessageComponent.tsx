/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IReducer } from "app/redux/interface";
import { action } from "app/redux/action";
import modules from "app/modules";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        borderRadius: 15,
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SuccessfulMessageComponent() {
    const classes = useStyles();
    const { successful, message } = useSelector(
        (state: IReducer) => state.successfulReducer
    );
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(successful);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        setTimeout(() => {
            dispatch(action.successful.onResetSuccess());
        }, 300);
    };
    React.useEffect(() => {
        setOpen(successful);
        return () => { };
    }, [successful]);

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={open}
                autoHideDuration={3500}
                onClose={handleClose}
            >
                <Alert
                    style={{ borderRadius: modules.BORDER_RADIUS }}
                    onClose={handleClose}
                    severity="success">
                    {message}!
                </Alert>
            </Snackbar>
        </div>
    );
}
