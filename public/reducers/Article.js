import {
    REQUEST_ARTICLE, RECEIVE_ARTICLE, CHANGE_CURRENT_TOPICID,RECORD_ARTICLE_SCROLLT
} from '.././actions/actions'

const article = (state={currentTopicId:''},action) => {
    let stateItem = state[action.topicId] || {};
    switch (action.type){
        case CHANGE_CURRENT_TOPICID:
            return {...state, currentTopicId:action.topicId};
        case RECORD_ARTICLE_SCROLLT:
            stateItem =  {...stateItem,scrollT:action.scrollT};
            return {...state,[action.topicId]:stateItem,currentTopicId:action.topicId};
        case REQUEST_ARTICLE:
            stateItem =  {...stateItem,isFetching:true};
            return {...state,[action.topicId]:stateItem,currentTopicId:action.topicId,isCommented:false};
        case RECEIVE_ARTICLE:
            stateItem = {...stateItem,isFetching:false,article:action.article};
            return {...state,[action.topicId]:stateItem};
        default :
            return state
    }
};

export default article