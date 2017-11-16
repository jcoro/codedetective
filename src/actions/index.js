import axios from 'axios';
import querystring from 'querystring';

const API_KEY = "hackerrank|3319021-2142|943b7bec92dc3ef8bb98eba7d516a87cc4f8df28";
const ROOT_URL = "http://api.hackerrank.com/checker/submission.json";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const INCREMENT_CHALLENGE = "INCREMENT_CHALLENGE";
export const UPDATE_CODE = "UPDATE_CODE";


export function selectPage(pages, id) {
    // selectPage is an Action Creator, it needs to return an action,
    // An object with a type property.
    return {
        type: 'PAGE_SELECTED',
        page: {
            id: id,
            name: pages[id].name,
            active: true
        }
    }
}

export function updateToNewCode(newCode) {
    return {
        type: 'UPDATE_CODE',
        newCode: newCode,
    }
}

export function incrementChallenge(num) {
    return {
        type: 'INCREMENT_CHALLENGE',
        active_challenge: num + 1
    }
}

export const fetchPostsIfNeeded = () => (dispatch) => {
    return fetchPosts(dispatch);
};

const fetchPosts = (dispatch) => {
    const data = querystring.stringify({
        api_key: API_KEY,
        source: "public class HelloWorld {public static void main(String[] args) {System.out.println(\"Hello, World\");}}",
        lang: 3,
        testcases: JSON.stringify([""]),
        wait: true,
        callback_url: '',
        format: 'json'
    });

    const url = `${ROOT_URL}`;

    const config = JSON.stringify({
        hostname: 'api.hackerrank.com',
        port: 80,
        path: '/checker/submission.json',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    dispatch(requestPosts());
    return axios.post(url, data, config)
        .then(function (response) {
            //console.log(response);
            dispatch(receivePosts(response));
        });
};

export const requestPosts = () => ({
    // This one sets isFetching to true
    type: REQUEST_POSTS,
    isFetching: true
});

export const receivePosts = (json) => ({
    // This one sets isFetching to false
    type: RECEIVE_POSTS,
    posts: json.data.result.stdout,
});





