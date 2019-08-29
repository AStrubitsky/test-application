import {connect} from 'react-redux';

import {IRootState} from '../../store/types';
import Home, {IProps as IHomeProps} from './homeComponent';

type StateProps = Pick<IHomeProps, 'userInfo'>;

const mapStateToProps = (state: IRootState): StateProps => ({
  userInfo: state.auth.loginData,
});

export default connect(mapStateToProps)(Home);
