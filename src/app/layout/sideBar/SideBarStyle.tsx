import { makeStyles } from "@material-ui/core";
import modules from "../../modules";

const useStyles = makeStyles({
  head: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: modules.PADDING * 1.2,
    paddingRight: modules.PADDING,
    position: "sticky",
    top: 0,
    backgroundColor: modules.WHITE,
    height: "50px",
  },
  containSidebar: {
    backgroundColor: modules.WHITE,
  },
  logo: {
    width: 32,
    Height: 32,
    borderRadius: 4,
  },
  Expand: {
    width: 32,
    Height: 32,
    borderRadius: 4,
    marginLeft: 12,
    marginTop: 12,
  },
  containUser: {
    display: "flex",
    paddingLeft: modules.PADDING * 1.2,
    paddingRight: modules.PADDING,
    paddingTop: modules.PADDING / 1.5,
    paddingBottom: modules.PADDING / 1.5,
    justifyContent: "space-between",
  },
  imageProfile: {
    width: 30,
    Height: 30,
    borderRadius: 15,
  },
  logoName: {
    fontSize: 15,
    color: modules.LIGHT_BLACK,
    paddingLeft: 12,
  },
  textDirectory: {
    marginTop: 5,
    fontSize: 9,
    color: modules.LIGHT_BLACK,
    paddingLeft: 12,
    letterSpacing: 4,
  },
  content: {
    backgroundColor: modules.WHITE,
    color: modules.SUB_TITLE,

  },
  containAdmin: {
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: modules.RED,
  },
  textAdmin: {
    fontSize: modules.FONT_H4,
    fontWeight: modules.FONT_LARGE,
    color: modules.WHITE,
    textTransform: "capitalize",
    textAlign: "center",
  },
  heading: {
    fontSize: 15,
    fontWeight: 500,
    color: modules.TEXT_COLOR,
  },
  group: {
    width: "100%",
  },
  button: {
    width: "256px",
    justifyContent: "flex-start",
    padding: modules.PADDING,
    "&:hover": {
      backgroundColor: "rgba(0,255,255,0.2)",
    },
    borderRadius: 0,
    color: modules.TEXT_COLOR,
  },
  title: {
    textTransform: "capitalize",
    color: modules.TEXT_COLOR,
    paddingLeft: 14,
  },
  icon: {
    color: modules.LIGHT_BLACK,
    width: 20,
  },
  link: {
    textDecoration: "none",
  },
  active: {
    color: "#1873E8",
  },
  column: {
    flexDirection: "column",
    flex: 1,
  },
  textUsername: {
    fontSize: 14,
    color: "#fff",
    textTransform: "capitalize",
    paddingLeft: 15,
  },
  contentContainer: {
    backgroundColor: modules.WHITE,
    width: "100vw",
    height: "100vh",
    flexDirection: "row",
  },

  containerDialog: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
  },
  containRight: {
    width: "20vw",
    height: "100vh",
  },
  header: {
    height: "50px",
    width: "100vw",
  },
  containScroll: {},
  line: {
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderStyle: "solid",
    borderColor: modules.RED,
  },
  buttonExtend: {
    color: modules.TEXT_COLOR,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 65,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(0,255,255,0.2)",
    },
  },
});
export default useStyles;
