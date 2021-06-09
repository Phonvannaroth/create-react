/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { Outlet } from "react-router-dom";
import withWidth from "@material-ui/core/withWidth";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "app/redux/service/data.service";
import { removeCookie } from "app/redux/service/cookie.service";
import HeaderContainer from "./header/HeaderContainer";
import SideBarContainer from "./sideBar/SideBarContainer";
import modules from "../modules";
import SideBarDialogScreen from "./sideBar/SideBarDialogScreen";
import { IReducer } from "../redux/interface";

import { action } from "../redux/action";

interface Props {
  width: any;
}

function AppLayoutContainer(props: Props) {
  const classes = useStyles();
  const { width } = props;
  const [sideBar, setOpenSideBar] = React.useState(false);
  const { progress } = useSelector((state: IReducer) => state.authReducer);
  const { expanded } = useSelector((state: IReducer) => state.settingReducer);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    Axios.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        if (error.message === "Request failed with status code 500") {
          setOpen(true);
        } else if (error.message === "Request failed with status code 401") {
          removeCookie();
          window.location.reload();
        }
        return Promise.reject(error);
      }
    );

    return () => { };
  }, [progress]);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className={classes.headerTop} />
      <div className={classes.container}>
        {width === "xs" || width === "sm" ? null : (
          <div
            data-aos-anchor-placement="center-bottom"
            data-aos="fade-right"
            style={expanded === true ? { width: "256px", transition: " 0.2s" } : { width: "65px", transition: " 0.2s" }}
            className={classes.containSideBar}
          >
            <SideBarContainer isDialog={false} />
          </div>
        )}

        {width === "xs" || width === "sm" ? (
          <div className={classes.containContent}>
            <HeaderContainer
              width={width}
              onOpenSideBar={() => setOpenSideBar(true)}
            />
            <Outlet />
          </div>
        ) : (
          <div
            className={classes.containContent}
            style={
              expanded === true
                ? { width: "calc(100vw - 256px)" }
                : { width: "calc(100vw - 65px)" }
            }
          >
            <HeaderContainer
              width={width}
              onOpenSideBar={() => setOpenSideBar(true)}
            />
            <Outlet />
            <div style={{ height: "100px" }} />
          </div>
        )}
      </div>
      <SideBarDialogScreen
        open={sideBar}
        onClose={() => {
          setOpenSideBar(false);
          dispatch(action.setting.onChangeExpanded(false));
        }}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" color="error">
          Opp! sorry something went wrong
        </Alert>
      </Snackbar>
    </>
  );
}

const useStyles = makeStyles({
  paper: {
    zIndex: 18,
  },

  contentContainer: {
    width: "100vw",
    height: "100vh",
    flexDirection: "row",
  },

  textError: {
    color: modules.BACKGROUND_COLOR,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    marginTop: -50,
  },
  containSideBar: {
    width: "65px",
    backgroundColor: modules.WHITE,
    borderStyle: "solid",
    borderColor: modules.BORDER_COLOR,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 0,
    height: "100vh",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  containContent: {
    height: "100vh",
    width: "calc(100vw)",
    backgroundColor: modules.WHITE,
    // overflow: "auto",
    position: "initial",
  },

  headerTop: {
    width: "100%",
    height: 50,
    backgroundColor: modules.WHITE,
  },
});
export default withWidth()(AppLayoutContainer);
