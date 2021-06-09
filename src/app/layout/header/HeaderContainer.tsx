import { PayloadSigOut } from "app/redux/interface/auth.interface";
import * as React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { action } from "../../redux/action";
import { IReducer } from "../../redux/interface";
import HeaderScreen from "./HeaderScreen";

interface Props {
  navigate?: any;
  onOpenSideBar: any;
  width?: any;
  onChangeExpanded: (expanded: boolean) => void;
  signOut: (payload: PayloadSigOut) => void;
  expanded: boolean;
}
const _onOpenSideBar = (onOpenSideBar: any, onChangeExpanded: any) => {
  onOpenSideBar();
  onChangeExpanded();
};
const HeaderContainer = (props: Props) => {
  const navigate = useNavigate();
  const { onOpenSideBar, width, onChangeExpanded, expanded, signOut } = props;

  return (
    <HeaderScreen
      onOpenSideBar={() => _onOpenSideBar(onOpenSideBar, onChangeExpanded)}
      width={width}
      onChangeExpanded={() => onChangeExpanded(!expanded)}
      expanded={expanded}
      onLogout={() => { signOut({ navigate }) }}
      loading={false}
    />
  );
};

const mapStateToProps = (state: IReducer) => {
  return {
    expanded: state.settingReducer.expanded,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeExpanded: (expanded: boolean) =>
      dispatch(action.setting.onChangeExpanded(expanded)),
    signOut: (payload: PayloadSigOut) => dispatch(action.auth.signOut(payload)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
