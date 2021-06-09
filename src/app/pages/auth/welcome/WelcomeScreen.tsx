import { Player } from "@lottiefiles/react-lottie-player";
import { makeStyles } from "@material-ui/core";
import modules from "app/modules";
import React from "react";

const WelcomeScreen = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Player
        autoplay
        loop
        src={modules.LOADING}
        style={{ height: "120px", width: "120px" }}
      />
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "10%",
    Height: "10%",
    borderRadius: 15,
    borderColor: modules.COLOR_MAIN,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTitle: {
    color: modules.COLOR_MAIN,
    marginBottom: modules.PADDING,
  },
});

export default WelcomeScreen;
