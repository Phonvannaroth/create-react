/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-else-return */
import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import { action } from "app/redux/action";
import { IReducer } from "app/redux/interface";
import { IPayloadSetSidebar } from "app/redux/interface/setting.interface";
import ErrorMessageComponent from "app/components/error/ErrorMessageComponent";
import SuccessfulMessageComponent from "app/components/successful/SuccessfulMessageComponent";
// import WelcomeContainer from "app/pages/auth/welcome/WelcomeContainer";

import { USER_ACCESS } from "../dummy/access";
import AppLayoutContainer from "../layout/AppLayoutContainer";
import MainLayoutContainer from "../layout/MainLayoutContainer";
import LoginContainer from "../pages/auth/login/LoginContainer";

interface Props {
  account: any,
  canActive: any
}
const App = (props: Props) => {
  const { account } = props
  React.useEffect(() => {
    props.canActive();
    return () => { }
  }, [])
  if (!account) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayoutContainer />}>
            <Route path="" element={<Navigate to="login" />} />
            <Route path="login" element={<LoginContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <React.Suspense fallback={<div />}>
          <Route path="" element={<MainLayoutContainer />}>
            <Route path="" element={<Navigate to={USER_ACCESS.forms[0].path} />} />
            <Route path="*" element={<Navigate to={USER_ACCESS.forms[0].path} />} />
            {USER_ACCESS.forms.map((m: any, mIndex: number) => {
              return (
                <Route path={m.path} element={<AppLayoutContainer />}>
                  {m.children.map((i: any, index: number) => {
                    return (
                      <Route
                        key={index}
                        path={i.path}
                        element={
                          <i.element
                            path={m.path}
                            routes={i.routes}
                            index={mIndex}
                          />
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}
            {USER_ACCESS.management.map((m: any, mIndex: number) => {
              return (
                <Route path={m.path} element={<AppLayoutContainer />}>
                  {m.children.map((i: any, index: number) => {
                    return (
                      <Route
                        key={index}
                        path={i.path}
                        element={
                          <i.element
                            path={i.path}
                            routes={i.routes}
                            index={USER_ACCESS.forms.length + mIndex}
                          />
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}
          </Route>
        </React.Suspense>
      </Routes>
      <ErrorMessageComponent />
      <SuccessfulMessageComponent />
    </BrowserRouter>
  );
};
const mapStateToProps = (state: IReducer) => ({
  globalError: state.errorReducer.globalError,
  account: state.authReducer.account
});

const mapDispatchToProps = (dispatch: any) => ({
  onSetSidebar: (payload: IPayloadSetSidebar) =>
    dispatch(action.setting.onSetSidebar(payload)),
  canActive: () => dispatch(action.auth.canActive())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
