/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unneeded-ternary */
import * as React from "react";
import { Button, ButtonGroup, Grow, withWidth } from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { saveSetting } from "app/redux/service/cookie.service";
import modules from "../../modules";
import useStyles from "./SideBarStyle";
import { USER_ACCESS } from "../../dummy/access";

interface Props {
  width?: any;
  expanded: boolean;
  isDialog: boolean;
  onClose: () => void;
  sidebar: number;
  onSelected: (index: any) => void;
}
const SideBarScreen = ({
  expanded,
  isDialog,
  onClose,
  sidebar,
  onSelected,
  width,
}: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setSelected(Number(sidebar));
    return () => { };
  }, [sidebar]);
  React.useEffect(() => {
    setChecked(true);
    return () => { };
  }, [expanded]);
  const reWidth = width === "sm" ? "100%" : "94%";
  const reWidthExpend = width === "sm" ? "100%" : "100%";
  if (expanded === false) {
    return (
      <div className={classes.containSidebar}>

        <div className={classes.containScroll}>
          <img className={classes.Expand} src={modules.LOGO} alt="Logo" />
          {USER_ACCESS.forms.map((m: any, index: number) => {
            return (
              <Grow
                style={{ transformOrigin: "0 0 0 0" }}
                in={checked}
                {...(checked ? { timeout: 800 + index * 100 } : {})}
              >
                <Link key={index} to={m.path}>
                  <ButtonGroup
                    style={
                      selected === m.id
                        ? {
                          backgroundColor: modules.BACKGROUND_FORM,
                          width: reWidthExpend,
                        }
                        : {}
                    }
                    className={classes.buttonExtend}
                    onClick={() =>
                      _onSelected(onSelected, m.id, isDialog, onClose)
                    }
                  >
                    <div className="tooltip">
                      {m.icon}
                      <span className="tooltiptext">{m.name}</span>
                    </div>
                  </ButtonGroup>
                </Link>
              </Grow>
            );
          })}
          <div className={classes.line} />
          {USER_ACCESS.management.map((m: any, index: number) => {
            return (
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0 0" }}
                {...(checked ? { timeout: 800 + index * 100 } : {})}
              >
                <div key={index} className={classes.group}>
                  <Link className={classes.link} to={m.path}>
                    <ButtonGroup
                      style={
                        selected === m.id
                          ? {
                            backgroundColor: modules.BACKGROUND_FORM,
                            width: reWidthExpend,
                          }
                          : {}
                      }
                      className={classes.buttonExtend}
                      onClick={() =>
                        _onSelected(onSelected, m.id, isDialog, onClose)
                      }
                    >
                      <div className="tooltip">
                        {m.icon}
                        <span className="tooltiptext">{m.name}</span>
                      </div>
                    </ButtonGroup>
                  </Link>
                </div>
              </Grow>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className={classes.containSidebar}>
      <div
        className={classes.head}>
        <img className={classes.logo} src={modules.LOGO} alt="Logo" />
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 " }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <div className={classes.column}>
            <h2 className={classes.logoName}>Terizla Template</h2>
            <p className={classes.textDirectory}>Supper Admin</p>
          </div>
        </Grow>
        {isDialog ? (
          <Button
            onClick={onClose}
            style={
              width === "xs"
                ? { padding: 0, minWidth: 0 }
                : { padding: 0, margin: 0 }
            }
          >
            <Icon.Close className={classes.icon} />
          </Button>
        ) : null}
      </div>
      <div className={classes.containScroll}>

        {USER_ACCESS.forms.map((m: any, index: number) => {
          return (
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 " }}
              {...(checked ? { timeout: 100 + index * 100 } : {})}
            >
              <Link key={index} className={classes.link} to={m.path}>
                <ButtonGroup
                  style={
                    selected === m.id
                      ? { backgroundColor: modules.BACKGROUND_FORM, width: reWidth, color: modules.COLOR_MAIN }
                      : {}
                  }
                  className={classes.button}
                  onClick={() =>
                    _onSelected(onSelected, m.id, isDialog, onClose)
                  }
                >
                  {m.icon}
                  <p
                    style={
                      selected === m.id
                        ? { color: modules.LIGHT_BLACK, }
                        : {}
                    }
                    className={classes.title}>{m.name}</p>
                </ButtonGroup>
              </Link>
            </Grow>
          );
        })}
        <Accordion className={classes.content} defaultExpanded>
          <AccordionSummary
            className={classes.content}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>User Management</Typography>
          </AccordionSummary>

          {USER_ACCESS.management.map((m: any, index: number) => {
            return (
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0 0" }}
                {...(checked ? { timeout: 800 + index * 100 } : {})}
              >
                <Link key={m.id} className={classes.link} to={m.path}>
                  <ButtonGroup
                    style={
                      selected === m.id
                        ? {
                          backgroundColor: modules.BACKGROUND_FORM,
                          width: reWidth,
                        }
                        : {}
                    }
                    className={classes.button}
                    onClick={() =>
                      _onSelected(onSelected, m.id, isDialog, onClose)
                    }
                  >
                    {m.icon}
                    <p className={classes.title}>{m.name}</p>
                  </ButtonGroup>
                </Link>
              </Grow>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

const _onSelected = (
  onSelected: any,
  item: any,
  isDialog: any,
  onClose: any
) => {
  onSelected(item);
  saveSetting(item);

  if (isDialog) {
    onClose(true);
  }
};

export default withWidth()(SideBarScreen);
