/* eslint-disable no-console */
import { makeStyles, Menu, MenuProps, withStyles } from "@material-ui/core";
import modules from "../../modules";

const useStyle = makeStyles({
  head: {
    height: 50,
    backgroundColor: modules.WHITE,
    display: "flex",
    alignItems: "center",
    top: 0,
    zIndex: 100,
    paddingRight: 12,
  },
  headSub: {
    height: "48px",
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    top: 100,
    left: 0,
    paddingLeft: modules.PADDING,
    paddingRight: modules.PADDING,
  },
  footer: {
    height: 50,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100vw",
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 800,
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 800,
  },
  textFooter: {
    textAlign: "center",
    marginLeft: "40vw",
    color: modules.SUB_TITLE,
  },
  group: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    paddingLeft: 12,
  },
  icon: {
    fontSize: modules.FONT_H2,
    color: modules.LIGHT_BLACK,
  },
  btnLogout: {
    color: modules.TEXT_COLOR,
    margin: 12
  },
  textAdmin: {
    marginLeft: 12
  },
  iconProfile: {
    width: modules.MARGIN * 2.5,
    height: modules.MARGIN * 2.5,
  },
  btnMain: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    backgroundColor: modules.BORDER_COLOR,
  },
  btnNoti: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    backgroundColor: modules.BORDER_COLOR,
    marginRight: modules.MARGIN
  },
  Menu: {
    paddingLeft: modules.PADDING,
    paddingRight: modules.PADDING,
  },
  containButton: {
    display: "flex",

    flexDirection: "row",
  },
  space: {
    width: modules.MARGIN,
  },
  textAlert: {
    color: modules.TEXT_COLOR,
    fontSize: modules.FONT_H4,
    fontWeight: modules.FONT_MEDIUM,
    marginBottom: modules.PADDING,
  },
  btnOk: {
    height: 32,
    width: 100,
    backgroundColor: modules.COLOR_MAIN,
    borderRadius: modules.BORDER_RADIUS / 1.5,
    color: modules.WHITE,
  },
  btnCancel: {
    height: 32,
    width: 100,
    backgroundColor: modules.WHITE,
    borderRadius: modules.BORDER_RADIUS / 1.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: modules.TEXT_COLOR,
    color: modules.TEXT_COLOR,
  },
  textOk: {},
});

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default useStyle;
