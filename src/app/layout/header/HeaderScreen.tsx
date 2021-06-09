/* eslint-disable no-console */
import { Button, Hidden, ButtonBase, Avatar, LinearProgress } from "@material-ui/core";
import * as React from "react";
import * as Icon from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import modules from "app/modules";
import { globalStyles } from "../../style/globalStyles";
import useStyle, { StyledMenu } from "./HeaderStyle";

interface Props {
  onOpenSideBar: () => void;
  onChangeExpanded: () => void;
  onLogout: (payload: any) => void;
  width: any;
  expanded: boolean;
  loading: boolean
}

const HeaderScreen = ({
  onOpenSideBar,
  width,
  onChangeExpanded,
  expanded,
  onLogout,
  loading
}: Props) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const _onLogout = () => {
    const payload: any = {
      navigate,
    };
    onLogout(payload);
    handleClose();
  };
  return (
    <>
      <div
        style={{ position: "sticky", ...globalStyles.shadow }}
        className={classes.head}
      >
        <Hidden smUp>
          <Button onClick={onOpenSideBar}>
            <Icon.Menu className={classes.icon} />
          </Button>
        </Hidden>
        {width === "sm" ? (
          <Button onClick={onOpenSideBar}>
            <Icon.Menu className={classes.icon} />
          </Button>
        ) : null}
        {width === "md" || width === "lg" || width === "xl" ? (
          <Button onClick={onChangeExpanded}>
            {expanded ? (
              <Icon.Menu className={classes.icon} />
            ) : (
              <Icon.MenuOpen className={classes.icon} />
            )}
          </Button>
        ) : null}

        <p className={classes.title} />
        <div className={classes.group}>
          <Button className={classes.btnLogout}>
            {/* <Icon.ExitToApp className={classes.icon} />
            Logout */}
            <Avatar className={classes.iconProfile} alt="Remy Sharp" src={modules.NO_USER} />
            <p className={classes.textAdmin}>Administrator</p>
          </Button>
          <ButtonBase className={classes.btnNoti}>
            <Icon.Notifications className={classes.icon} />
          </ButtonBase>
          <ButtonBase onClick={handleClick} className={classes.btnMain}>
            <Icon.ArrowDropDown className={classes.icon} />
          </ButtonBase>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <div className={classes.Menu}>

              <p className={classes.textAlert}>
                Are you sure you want to logout?
              </p>
              <div className={classes.containButton}>
                <ButtonBase onClick={_onLogout} className={classes.btnOk}>
                  <p className={classes.textOk}>Okay</p>
                </ButtonBase>
                <div className={classes.space} />
                <ButtonBase onClick={handleClose} className={classes.btnCancel}>
                  <p className={classes.textOk}>Cancel</p>
                </ButtonBase>
              </div>
            </div>
          </StyledMenu>
        </div>
      </div>
      {
        loading ? <LinearProgress />
          : null

      }

    </>
  );
};

export default HeaderScreen;
