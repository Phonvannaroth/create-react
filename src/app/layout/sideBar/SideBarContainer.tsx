import { action } from "app/redux/action";
import { IPayloadSetSidebar } from "app/redux/interface/setting.interface";
import * as React from "react";
import { connect } from "react-redux";
import { IReducer } from "../../redux/interface";
import SideBarScreen from "./SideBarScreen";

interface Props {
  width?: any;
  expanded?: boolean;
  isDialog?: boolean;
  onClose?: () => void;
  onSetSidebar: (payload: IPayloadSetSidebar) => void;
  sidebar: number;
}
const SideBarContainer = (props: Props) => {
  const { expanded, isDialog, onClose, sidebar } = props;
  return (
    <SideBarScreen
      expanded={expanded}
      isDialog={isDialog}
      onClose={onClose}
      sidebar={sidebar}
      onSelected={(index) => props.onSetSidebar({ index })}
    />
  );
};

const mapStateToProps = (state: IReducer) => {
  return {
    expanded: state.settingReducer.expanded,
    sidebar: state.settingReducer.sidebar,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetSidebar: (payload: IPayloadSetSidebar) =>
      dispatch(action.setting.onSetSidebar(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
