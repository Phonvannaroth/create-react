/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import * as React from "react";
import { Outlet } from "react-router-dom";

interface Props { }
interface State { }

class MainLayoutContainer extends React.PureComponent<Props, State> {
  render() {
    return <Outlet />;
  }
}
export default MainLayoutContainer;
