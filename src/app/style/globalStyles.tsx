import modules from "../modules";

export const globalStyles = {
  row: {
    display: "flex",
    alignItems: "center",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  separate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    height: "calc(100vh - 50px)",
    "&::-webkit-scrollbar:horizontal ": {
      display: "none",
    },
  },
  shadow: {
    boxShadow: `0 2px 38px -12px rgba(0,0,0,.13)`,
  },
  shadowBig: {
    boxShadow: `0 0px 38px -12px rgba(0,0,0,0.4)`,
  },
  textInput: {
    outline: "outlined",
    borderRadius: modules.BORDER_RADIUS * 2,
    width: "100%",
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
  },
  textInputPassword: {
    outline: "outlined",
    borderRadius: modules.BORDER_RADIUS * 2,
    width: "100%",
    fontSize: modules.FONT_H5,
    color: modules.TEXT_COLOR,
    backgroundColor: modules.WHITE,
  },
  textInputError: {
    fontSize: modules.FONT_H6,
    color: modules.RED,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  textLink: {
    flex: 1,
    textAlign: "left",
  },
  imageIcon: {
    minWidth: "28px",
    minHeight: "28px",
  }
};
