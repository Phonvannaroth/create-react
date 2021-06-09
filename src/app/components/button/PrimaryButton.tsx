/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { ButtonBase, makeStyles } from "@material-ui/core";
import React from "react";
import modules from "../../modules";

interface Props {
  onClick?: () => void;
  title: string;
  progress?: boolean;
  style?: any;
  secondary?: boolean;
  children?: any;
  type?: any;
}
const Secondary = {
  backgroundColor: modules.SUB_TITLE,
};
const PrimaryButton = (props: Props) => {
  const classes = useStyles();
  const { title, onClick, progress, secondary, children, type } = props;
  if (children) {
    return (
      <ButtonBase
        style={secondary ? Secondary : {}}
        disabled={progress}
        className={classes.container}
        onClick={onClick}
      >
        {children}
      </ButtonBase>
    );
  }
  return (
    <ButtonBase
      type={type}
      style={secondary ? Secondary : {}}
      disabled={progress}
      className={classes.container}
      onClick={onClick}
    >
      <p className={classes.textTitle}>
        {progress ? "Loading ..." : title ? title : "Title"}
      </p>
    </ButtonBase>
  );
};

export default PrimaryButton;

const useStyles = makeStyles({
  container: {
    backgroundColor: modules.COLOR_MAIN,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    borderRadius: modules.BORDER_RADIUS / 2,
  },
  textTitle: {
    fontWeight: "bold",
    color: modules.WHITE,
    fontSize: modules.FONT_H5,
  },
});
