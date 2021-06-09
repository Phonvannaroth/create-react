/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import * as React from "react";
import { Outlet } from "react-router-dom";

interface Props {}
interface State {}
export default class LayoutContainer extends React.PureComponent<Props, State> {
  render() {
    return <Outlet />;
  }
}
