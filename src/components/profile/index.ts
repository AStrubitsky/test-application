import {connect} from 'react-redux';

import {IRootState} from '../../store/types';
import Profile, {IProps as IProfileProps} from './profile';
type StateProps = Pick<IProfileProps, 'userInfo'>;


const mapStateToProps = (state: IRootState): StateProps => ({
  userInfo: state.auth.loginData,
});

export default connect(mapStateToProps,)(Profile);
