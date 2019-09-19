import {connect} from 'react-redux';

import {IRootState} from '../../store/types';
import Posts, {IProps as IPostsProps} from './posts';
type StateProps = Pick<IPostsProps, 'userInfo'>;


const mapStateToProps = (state: IRootState): StateProps => ({
  userInfo: state.auth.loginData,
});

export default connect(mapStateToProps,)(Posts);
