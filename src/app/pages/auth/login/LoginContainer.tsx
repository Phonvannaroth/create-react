/* eslint-disable max-len */
import { action } from "app/redux/action";
import { IReducer } from "app/redux/interface";
import { IPayloadLoginWithEmailPassword } from "app/redux/interface/auth.interface";
import * as React from "react";
import { connect } from "react-redux";

import LoginScreen from "./LoginScreen";

interface Props {
  progress: boolean;
  error: boolean;
  onLogin: (payload: IPayloadLoginWithEmailPassword) => void;
}

class LoginContainer extends React.PureComponent<Props, any> {
  _onLogin = (username: string, password: string, navigate: any) => {
    const payload: IPayloadLoginWithEmailPassword = {
      email: username,
      password,
      navigate,
    };
    this.props.onLogin(payload);
  };

  render() {
    return (
      <LoginScreen
        onLogin={(username, password, navigate) =>
          this._onLogin(username, password, navigate)
        }
        progress={this.props.progress}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = (state: IReducer) => {
  return {
    progress: state.authReducer.progress,
    error: state.authReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (payload: IPayloadLoginWithEmailPassword) => dispatch(action.auth.loginWithEmailPassword(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
