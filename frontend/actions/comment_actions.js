import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
};

export const deleteComment = comment => dispatch => {
    return CommentAPIUtil.deleteComment(comment.id)
        .then(() => dispatch(removeComment(comment)));
};