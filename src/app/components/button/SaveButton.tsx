/* eslint-disable no-unneeded-ternary */
import { ButtonBase, CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
import * as Icon from "@material-ui/icons";
import modules from "../../modules";

interface Props {
  onClick?: () => void;
  progress?: boolean;
  title?: string;
  style?: any;
  isIcon?: boolean;
  type?: any;
  error?: any;
}

const SaveButton = (props: Props) => {
  const classes = useStyles();
  const { onClick, progress, title, style, isIcon, type } = props;

  return (
    <ButtonBase
      type={type}
      style={style ? style : {}}
      disabled={progress}
      onClick={onClick}
      className={classes.container}
    >
      {!progress ? (
        _renderIcon(isIcon, props.error)
      ) : (
        <>
          <CircularProgress color="inherit" size={20} />
        </>
      )}
      {/* {props.error ? <p>Error</p> : <p>Hello</p>} */}
      <p className={classes.textApply}>{title ? title : "Save"}</p>
    </ButtonBase>
  );
};

export default SaveButton;

const useStyles = makeStyles({
  container: {
    backgroundColor: modules.COLOR_MAIN,
    color: modules.WHITE,
    borderRadius: modules.RADIUS_SMALL,
    height: modules.HEIGHT_BUTTON,
    width: 125,
    marginBottom: modules.MARGIN,
    justifyContent: "center",
    alignItems: "center",
    marginRight: modules.MARGIN,
  },
  textApply: {
    marginLeft: 6,
    fontWeight: modules.FONT_BIG,
  },
});

const _renderIcon = (isIcon: boolean, error: any) => {
  if (isIcon) {
    return <>{!error ? <Icon.Check /> : <Icon.Block />}</>;
  }
  return null;
};
