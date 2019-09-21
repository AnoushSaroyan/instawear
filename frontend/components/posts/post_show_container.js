import { connect } from 'react-redux';
import { removePost, updatePost, fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectPost } from '../../reducers/selectors';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
    let post = selectPost(state, ownProps);
    let user = post ? state.entities.users[post.user_id] : undefined; // remember that the post is a protected route and the profile too 
        // and your're gonna have issues because of that, because you want the explore page that is gonna show a lot of posts

    return{
        currentUserId: state.session.id,
        post,
        user
};
}

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    removePost: post => dispatch(removePost(post)), 
    updatePost: post => dispatch(updatePost(post)),
    fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);