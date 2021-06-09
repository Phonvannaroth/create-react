/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable function-paren-newline */
import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CloudUpload from '@material-ui/icons/CloudUpload';
import { uploadPhoto } from 'app/redux/service/upload.service';

interface Props {
    image?: any,
    onClick: any,
    onChange: (downloadURL: string) => void
}

export default function UploadProgress({ image, onClick, onChange }: Props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [load, setLoad] = React.useState(0)

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    React.useEffect(() => {
        if (image) {
            setLoading(true)
            uploadPhoto(image, (num, downloadURL) => {
                setLoad(num)
                if (num === 100) {
                    setSuccess(true);
                    setLoading(false);
                    onChange(downloadURL)
                }
            })
        }
        return () => {

        };
    }, [image]);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        className={buttonClassname}
                    >
                        {success ? <CheckIcon /> : <CloudUpload />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={buttonClassname}
                        disabled={loading}
                    >
                        {
                            loading ? `${load} % Uploading ` : "Image Uploaded"
                        }

                    </Button>

                </div>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onClick}
                    >
                        Delete Image

                    </Button>
                </div>
            </div>
        </>
    );
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        buttonSuccess: {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        fabProgress: {
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }),
);
