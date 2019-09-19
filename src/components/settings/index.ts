import {connect} from 'react-redux';

import {IRootState} from '../../store/types';
import Settings, {IProps as ISettingsProps} from './settings';
type StateProps = Pick<ISettingsProps, 'userInfo'>;


const mapStateToProps = (state: IRootState): StateProps => ({
  userInfo: state.auth.loginData,
});

export default connect(mapStateToProps,)(Settings);
