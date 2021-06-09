/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
import React from "react";
import { ButtonBase, Dialog, Slide, withWidth } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

import SideBarContainer from "./SideBarContainer";
import useStyles from "./SideBarStyle";

interface Props {
  width?: any;
  onClose: any;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} timeout={500} />;
});
const SideBarDialogScreen = (props: Props) => {
  const classes = useStyles();
  const { open, onClose, width } = props;
  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 0,
          width: width === "sm" ? "265px" : "100%",
        },
      }}
      className={classes.containerDialog}
      open={open}
    >
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <div className={classes.contentContainer}>
          <SideBarContainer onClose={onClose} isDialog={true} />
        </div>
        <ButtonBase onClick={onClose} className={classes.containRight} />
      </div>
    </Dialog>
  );
};

export default withWidth()(SideBarDialogScreen);
