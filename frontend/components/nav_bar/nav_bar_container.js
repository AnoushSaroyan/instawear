import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));