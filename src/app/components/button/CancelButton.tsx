import { ButtonBase, makeStyles } from "@material-ui/core";
import React from "react";
import modules from "../../modules";
import { globalStyles } from "../../style/globalStyles";

interface Props {
  onClick: () => void;
}

const CancelButton = (props: Props) => {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ButtonBase className={classes.container} onClick={onClick}>
      Cancel
    </ButtonBase>
  );
};

export default CancelButton;

const useStyles = makeStyles({
  container: {
    backgroundColor: modules.WHITE,
    display: "flex",
    width: "150px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "45px",
    borderRadius: modules.BORDER_RADIUS / 2,
    color: modules.RED,
    fontWeight: modules.FONT_H4,
    marginLeft: modules.MARGIN,
    ...globalStyles.shadow,
  },
});
