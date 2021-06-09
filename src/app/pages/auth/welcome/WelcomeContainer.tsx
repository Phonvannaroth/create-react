/* eslint-disable react-hooks/exhaustive-deps */
import { PayloadCanActive } from 'app/redux/interface/auth.interface';
import { connect } from 'react-redux';
import WelcomeScreen from './WelcomeScreen';

interface Props {
  canActive?: (payload: PayloadCanActive) => void,
}
const WelcomeContainer = (props: Props) => {
  const { } = props
  return (
    <WelcomeScreen />

  );
}

const mapStateToProps = (state: any) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
