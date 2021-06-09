/* eslint-disable no-unneeded-ternary */
import { ButtonBase, makeStyles } from "@material-ui/core";
import React from "react";
import * as Icon from "@material-ui/icons";
import modules from "../../modules";

const ExcelButton = () => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.btbFour}>
      <Icon.InsertDriveFile />
      <p className={classes.textBtn}>Excel</p>
    </ButtonBase>
  );
};

export default ExcelButton;

const useStyles = makeStyles({
  btbFour: {
    height: modules.HEIGHT_BUTTON,
    paddingLeft: modules.PADDING,
    paddingRight: modules.PADDING,
    borderRadius: modules.RADIUS_SMALL * 2,
    color: modules.TEXT_COLOR,
    width: "35%",
  },
  textBtn: {
    marginLeft: modules.PADDING / 2,
  },
});
