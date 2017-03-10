
import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux"
import {fetchArticle,recordArticleScrollT} from '../../actions/actions'
import getSize from "../../utils/getSize";
import Content from './Content';
import Reply from './Reply';
import Title from '../Common/Title/Title';
class Article extends React.Component{
    constructor(){
        super();
        this.displayName="Article";
        this.state = {
            fadeIn:true
        }
    }
    componentWillMount(){
        const {scrollT,dispatch,article,isFetching,params} = this.props;
        if(scrollT){
            window.scrollTo(0,scrollT)
        }
        if(!article.author && !isFetching){
            const topicId = params.id;
            dispatch(fetchArticle(topicId));
        }
    }

    componentWillReceiveProps(newProps){
        const {scrollT} = newProps;
        window.scrollTo(0,scrollT)
    }
    componentWillUnmount(){
        this.setState({
            fadeIn:false
        })
        let {scrollT} = getSize()
        const {currentTopicId,dispatch} = this.props;
        dispatch(recordArticleScrollT(currentTopicId,scrollT));

    }
    render(){
        const {isFetching,article,currentTopicId,isCommented,dispatch} = this.props;
        return (
            <div  style={{marginBottom:"48px",overflow:"hidden"}}>
                <Title isFetching={isFetching} title='文章详情' showBack={true}/>
                <div>
                    {Object.keys(article).length!==0 &&
                    <div>
                        <Content {...({article,dispatch})}/>
                        <Reply replies={article.replies} />
                    </div>
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {currentRouter} = state;
    const {currentTopicId,isCommented} = state.article ;

    const isFetching = state.article[currentTopicId] ? state.article[currentTopicId].isFetching : false;
    const scrollT = state.article[currentTopicId]? state.article[currentTopicId].scrollT : '0';
    const article = state.article[currentTopicId] && state.article[currentTopicId].article ? state.article[currentTopicId].article : {};
    return {isFetching,scrollT,article,currentTopicId,currentRouter,isCommented}
}

export default  connect(mapStateToProps)(Article)