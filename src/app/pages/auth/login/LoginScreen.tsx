/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
import { Container } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "@material-ui/icons";
import { useForm } from "react-hook-form";
import PrimaryButton from "app/components/button/PrimaryButton";
import TextInputPassword from "app/components/input/TextInputPassword";
import CheckBox from "../../../components/checkbox/CheckboxLabels";
import TextInput from "../../../components/input/TextInput";
import modules from "../../../modules";
import { globalStyles } from "../../../style/globalStyles";
import useStyles from "./LoginStyle";

interface Props {
  onLogin: (username: string, password: string, navigate: any) => void;
  progress: boolean;
  error: boolean;
}

export default function LoginScreen(props: Props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { onLogin, progress, error } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    onLogin(data.username, data.password, navigate);
  };

  return (
    <div
      // style={{
      //   backgroundImage: `url(${modules.IMG_BACKGROUND})`,
      // }}
      className={classes.mainContainer}
    >
      <Container maxWidth="sm">
        <div className={classes.container}>
          <form
            className={classes.containCard}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.head}>
              <img
                width="32px"
                height="32px"
                className={classes.logo}
                src={modules.LOGO}
                alt="Logo"
              />
              <div className={classes.column}>
                <h2 className={classes.logoName}>Terizla Template</h2>
                <p className={classes.textDirectory}>DIRECTORY</p>
              </div>
            </div>
            <div className={classes.containForm}>
              <div className="container">
                <TextInput
                  autoComplete="off"
                  style={globalStyles.textInput}
                  label="Username"
                  variant="outlined"
                  name="username"
                  id="username"
                  error={errors.username}
                  {...register("username", { required: true })}
                />
                <TextInputPassword
                  autoComplete="off"
                  style={globalStyles.textInputPassword}
                  label="Password"
                  variant="outlined"
                  name="password"
                  error={errors.password}
                  {...register("password", { required: true })}
                />
                {_renderMessageError(error)}
                <CheckBox />
                <PrimaryButton
                  style={globalStyles.textInput}
                  title="Login"
                  type="submit"
                  progress={progress}
                />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

const _renderMessageError = (error: boolean) => {
  const classes = useStyles();
  if (error) {
    return (
      <div className={classes.containError}>
        <Icon.Error className={classes.iconError} />
        <p className={classes.textError}>
          Sorry your Username or Password is incorrect.
        </p>
      </div>
    );
  }
  return null;
};
