/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Provider } from "react-redux";
import App from "../routes/index";

interface Props { }

interface State {

}
function SETUP(stores: any) {
  return class Setup extends React.Component<Props, State> {
    constructor(props: any) {
      super(props);
      this.state = {

      };
    }

    render() {
      return (
        <Provider store={stores}>
          <App />
        </Provider>
      );
    }
  };
}

export default SETUP;
