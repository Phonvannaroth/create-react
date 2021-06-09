import { makeStyles } from "@material-ui/core";
import modules from "../../../modules";
import { globalStyles } from "../../../style/globalStyles";

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: modules.WHITE,
    display: "block",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  containCard: {
    backgroundColor: modules.WHITE,
    ...globalStyles.shadow,
    borderWidth: 1,
    borderColor: modules.BORDER_COLOR,
    borderStyle: "solid",
    minWidth: 350,
    width: "85%",
  },
  head: {
    alignItems: "center",
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: modules.LIGHT_BLACK,
    height: "60px",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: modules.RED,
    borderStyle: "solid",
  },
  logo: {
    borderRadius: 4,
    overflow: "hidden",
    paddingLeft: modules.PADDING * 1.2,
    paddingRight: modules.PADDING,
  },
  column: {
    flexDirection: "column",
    flex: 1,
  },
  logoName: {
    fontSize: 15,
    color: "#fff",
  },
  textDirectory: {
    marginTop: 5,
    fontSize: 9,
    color: "#fff",
    letterSpacing: 4,
  },
  containForm: {
    padding: modules.PADDING / 2,
    justifyContent: "center",
    alignItems: "center",
    margin: modules.PADDING,
    width: `calc(100% - ${modules.PADDING / 2})`,
  },
  selectRoot: {
    height: "45px",
  },
  textError: {
    color: modules.RED,
    fontSize: modules.FONT_H5,
    marginLeft: 3,
  },
  iconError: {
    color: modules.RED,
    fontSize: modules.FONT_H4,
  },
  containError: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    outline: "outlined",
    borderRadius: modules.BORDER_RADIUS / 2,
    width: "100%",
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
  },
});
export default useStyles;
