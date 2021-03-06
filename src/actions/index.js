import axios from 'axios';
import querystring from 'querystring';

const API_KEY = "hackerrank|3319021-2208|617289cd7ad085d28177eea27ea8a25f4aacc8f3";
const ROOT_URL = "https://cors-anywhere-coronite.herokuapp.com/api.hackerrank.com/checker/submission.json";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const INCREMENT_CHALLENGE = "INCREMENT_CHALLENGE";
export const UPDATE_CODE = "UPDATE_CODE";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const MARK_AS_COMPLETED = "MARK_AS_COMPLETED";


export function markAsCompleted(index){
    return {
        type: 'MARK_AS_COMPLETED',
        id: index,
    }
}

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

export function changeLanguage(value){
    return {
        type: 'CHANGE_LANGUAGE',
        newLanguage: value,
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

export function chooseChallenge(num) {
    return {
        type: 'CHOOSE_CHALLENGE',
        active_challenge: num,
    }
}

export const fetchPostsIfNeeded = (code, lang) => (dispatch) => {
    // fetchPosts(dispatch) is a Promise Object
    return fetchPosts(dispatch, code, lang);
};

const fetchPosts = (dispatch, code, lang) => {
    const data = querystring.stringify({
        api_key: API_KEY,
        source: code,
        lang: lang,
        testcases: JSON.stringify([""]),
        wait: true,
        callback_url: '',
        format: 'json'
    });

    const url = `${ROOT_URL}`;

    const config = {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };


    dispatch(requestPosts());

    return axios.post(url, data, config)
        .then(function (response) {
            console.log(response);
            dispatch(receivePosts(response));
        }).catch(function(error){
            console.log(error);
        });

        //System.out.println("Hello");

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





