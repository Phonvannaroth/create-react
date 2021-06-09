/* eslint-disable react/jsx-closing-bracket-location */
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
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function ErrorMessageComponent() {
    const classes = useStyles();
    const { error, message } = useSelector(
        (state: IReducer) => state.errorReducer
    );
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(error);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        setTimeout(() => {
            dispatch(action.error.onResetError());
        }, 300);
    };
    React.useEffect(() => {
        setOpen(error);
        return () => { };
    }, [error]);

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
                    severity="error">
                    {message}!
                </Alert>
            </Snackbar>
        </div>
    );
}
