import { REQUEST_POSTS } from "../actions/index";
import { RECEIVE_POSTS } from "../actions/index";
export default function(state = {compiledCode:"",isFetching:false}, action){

    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case RECEIVE_POSTS:
            console.log(action.posts);
            return {
                ...state,
                compiledCode: action.posts,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}