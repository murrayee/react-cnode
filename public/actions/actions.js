import fetch from 'isomorphic-fetch'
import {EventEmitter} from 'events';
import assign from 'object-assign';
//action的类型
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const SELECT_TAB= 'SELECT_TAB';
export const RECORD_SCROLLT='RECORD_SCROLLT';
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const CHANGE_CURRENT_TOPICID = 'CHANGE_CURRENT_TOPICID';
export const CURRENT_ROUTER = 'CURRENT_ROUTER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const SWITCH_COLLECTED = 'SWITCH_COLLECTED';
export const RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT';
export const PUBLISH_TOPIC = 'PUBLISH_TOPIC';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const MARK_ALL_MESSAGES = 'MARK_ALL_MESSAGES';
export const GET_COLLECTED_TOPICS = 'GET_COLLECTED_TOPICS';
//练习
export const TODO_LIST = "TODO_LIST";
export const todoAction = {
    type: TODO_LIST
};
// homePage
export const selectTab = tab => ({
    type:SELECT_TAB, tab
});

const requestTopics = tab => ({
    type:REQUEST_TOPICS,
    tab
});

const receiveTopics = (tab,topics,page,limit) => ({
    type:RECEIVE_TOPICS,
    tab,
    topics,
    page,
    limit
});
export const recordScrollT = (tab,scrollT) => {
    return ({
        type:RECORD_SCROLLT,
        tab,
        scrollT
    })
};
export const fetchTopics = (tab,page=1,limit=20) => {
    return dispatch => {
        dispatch(requestTopics(tab));
        fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTopics(tab,json.data,page,limit)) )
    }
};


// Article
const requestArticle = (topicId) => ({
    type:REQUEST_ARTICLE,
    topicId
});
const receiveArticle = (topicId,article) => ({
    type:RECEIVE_ARTICLE,
    topicId,
    article
});
const changeCurrentTopicId = topicId => ({
    type:CHANGE_CURRENT_TOPICID,
    topicId
});

export const recordArticleScrollT = (topicId,scrollT) => ({
    type:RECORD_ARTICLE_SCROLLT,
    topicId,
    scrollT
});
export const fetchArticle = (topicId,request=true) => {
    return dispatch => {
        if(request){
            dispatch(requestArticle(topicId));
            fetch(`https://cnodejs.org/api/v1/topic/${topicId}`)
                .then(response => response.json())
                .then(json => dispatch(receiveArticle(topicId,json.data)))
        }else{
            dispatch(changeCurrentTopicId(topicId))
        }
    }
};

