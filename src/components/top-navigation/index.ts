import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {logout} from '../../store/auth/actions';
import {IRootState, RootAction} from '../../store/types';
import TopNavigation, {
  IProps as ITopNavigationProps,
} from './topNavigationComponent';

type StateProps = Pick<ITopNavigationProps, 'userInfo'>;
type DispatchProps = Pick<ITopNavigationProps, 'onLogout'>;

const mapStateToProps = (state: IRootState): StateProps => ({
  userInfo: state.auth.loginData,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchProps => ({
  onLogout: (): RootAction => dispatch(logout.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavigation);
