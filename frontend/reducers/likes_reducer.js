import { 
    RECEIVE_LIKE, 
    REMOVE_LIKE
} from '../actions/like_actions';

import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST
} from '../actions/post_actions';

import { RECEIVE_USER } from '../actions/user_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.like.id];
            return newState; 
        case RECEIVE_ALL_POSTS:
            if (action.payload.likes === undefined) {
                return state;
            } else {
                return action.payload.likes;
            } // now i know Andy    
        case RECEIVE_POST:
            return Object.assign({}, state, action.payload.likes);
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.likes);    
        default:
            return state;
    }
}

export default likesReducer;