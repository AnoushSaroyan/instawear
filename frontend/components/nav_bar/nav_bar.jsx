import React from 'react';
import Search from "../search/search_container";
import CreatePostFormContainer from '../post_form/create_post_form_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    handleProfile(){
        this.props.history.push(`/profile/${this.props.currentUser.id}`);
    }

    render() {
        return (
            <div id="navbar" className="navbar-container">
                <div className="nav-links">
                    <div className="navbar-left">
                        <Link to="/feed">
                            <img src="/images/instagram.png" alt="instawear" />
                            <div className="vertical-devider"></div>
                            <h4 className="navbar-logo">Instawear</h4>
                        </Link>
                    </div>

                    <Search />

                    <div className="navbar-right">
                        <CreatePostFormContainer />
                        <div className="profile-btn">
                            {/* <Link to={`/profile/${this.props.currentUser.id}`}> */}
                                <img onClick={this.handleProfile} src="/images/user.png" alt={this.props.currentUser.username} />
                            {/* </Link> */}
                        </div>

                        <div className="logout-btn" onClick={this.handleLogout}>
                            <img src="/images/logout.png" alt="logout" />
                        </div>
                    </div>
                </div> 
            </div>
        ); 
    }

}
   
export default NavBar;