import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {login} from '../../../store/auth/actions';
import {IRootState, RootAction} from '../../../store/types';
import Login, {ILoginValues, IProps as ILoginProps} from './loginComponent';

type StateProps = Pick<ILoginProps, 'loginInfo' | 'loading'>;
type DispatchProps = Pick<ILoginProps, 'onSubmit'>;

const mapStateToProps = (state: IRootState): StateProps => ({
  loginInfo: state.auth.loginData,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchProps => ({
  onSubmit: (loginValues: ILoginValues): RootAction =>
    dispatch(login.request(loginValues)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
