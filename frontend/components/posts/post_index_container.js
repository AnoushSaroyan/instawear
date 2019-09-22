import { fetchAllPosts } from "../../actions/post_actions";
import { connect } from "react-redux";
import PostIndex from "./post_index";

const mapStateToProps = state => {
    // will select all the posts from the current user and the users that the current user follows in the future
    const posts = state.entities.posts;
    const users = state.entities.users;

    return ({
        posts,
        users
    });
};

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
