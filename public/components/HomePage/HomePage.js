/**
 * Created by Administrator on 2017/2/14.
 */
import React, {Component, PropTypes}  from "react";
import {render} from "react-dom";
import {Link} from 'react-router'
import {selectTab, fetchTopics, recordScrollT,fetchArticle} from '../../actions/actions'
import CircleLoading from "../Common/CircleLoading/CircleLoading"
import {connect} from 'react-redux'
import Header from "../Common/Header/Header"
import Lists from "../Common/Lists/Lists"
import getSize from "../../utils/getSize"
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "HomePage";
        this.state = {
            isFreshing: false,
            fixedTop:0,
            scrollT:0
        };
        this.tabs = [
            {
                title: '全部',
                filter: 'all',
            },
            {
                title: '精华',
                filter: 'good',
            },
            {
                title: '分享',
                filter: 'share',
            },
            {
                title: '问答',
                filter: 'ask',
            },
            {
                title: '招聘',
                filter: 'job',
            }
        ];
        this.onRefresh=(next)=>{
            if(!this.state.isFreshing){
                this.setState({
                    isFreshing:true
                });
                this.fresh();
                setTimeout(_ => {
                    next();
                    this.setState({
                        isFreshing:false
                    })
                },3000)
            }

        };
        this.fresh=()=>{
            const {selectedTab,dispatch} = this.props;
            dispatch(fetchTopics(selectedTab,1));
        };
        this.handleClick = (tab) => {
            let {scrollT} = getSize();
            console.log(scrollT);
            const {selectedTab,dispatch,tabData} = this.props;
            dispatch(recordScrollT(selectedTab,scrollT));
            dispatch(selectTab(tab));
            const ua = navigator.userAgent;
            if(!tabData[tab] && ua.indexOf('Mobile') === -1){
                if(scrollT >= 64){
                    dispatch(recordScrollT(tab,64))
                    this.setState({
                        scrollT:64
                    })
                }else{
                    dispatch(recordScrollT(tab,scrollT));
                    this.setState({
                        scrollT:scrollT
                    })
                }
            }
        };
        this.loadMore = () => {
            const {selectedTab, page, isFetching, dispatch} = this.props;
            let ipage = page;
            if (!isFetching) {
                dispatch(fetchTopics(selectedTab, ++ipage));
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        const {topics,isFetching,selectedTab,scrollT,dispatch} = nextProps;
        // console.log(nextProps);
        // 去除刷新时记住的滚动条位置
        if(topics.length === 0 && this.props.scrollT === 0){
            window.scrollTo(0,0)
        }
        // fetchTopics开始后会先发送一个request的action,这个ation也会改变state从而触发该方法。如果不对isFetching进行判断，会再次进行fetchTopics从而进行了不必要的重复数据请求
        if (!isFetching && topics.length === 0) {
            dispatch(fetchTopics(selectedTab));
        }
        if(selectedTab !== this.props.selectedTab){
            if(scrollT){
                window.scrollTo(0,scrollT)
            }
        }

    }

    render() {
        const {selectedTab,isFetching,page,topics,dispatch,tabData,article} = this.props;
        // console.log(this.props)
        return (
            <div>
                <Header tabs={this.tabs} filter={selectedTab} onClick={this.handleClick}>
                    {this.tabs.map((tab, index) =>
                        <div key={index}>
                            {/*{((isFetching&&page === 0)||(tab.filter!==selectedTab&&!tabData[tab.filter])) && <CircleLoading />}*/}
                            {tab.filter === selectedTab && <div style={{opacity: (!isFetching || page >= 1) ? 1 : 0}}>
                                <Lists topics={topics} fetchArticle={fetchArticle} dispatch={dispatch} isFetching={isFetching} article={article}/>
                            </div>}
                        </div>
                    )}
                </Header>
            </div>
        )
    }
    componentDidMount(){
        const {selectedTab,page,scrollT,dispatch} = this.props;
        if(page === 0){
            dispatch(fetchTopics(selectedTab));
        }
        if(scrollT){
            window.scrollTo(0,scrollT);
        }
        let lastScrollY = this.lastScrollY;

        window.onscroll = () => {
            let {windowH,contentH,scrollT} = getSize()
            if(windowH + scrollT + 100 > contentH){
                this.loadMore()
            }
            const ua = navigator.userAgent;
            if(ua.indexOf('Mobile') === -1 ){
                if(!lastScrollY || !scrollT){
                    lastScrollY = scrollT
                }
                let diff = scrollT - lastScrollY;
                if(diff >= 0){
                    if(scrollT > 64 && this.state.fixedTop!==64){
                        this.setState({
                            fixedTop:64
                        })
                    }
                    if(scrollT <= 64){
                        this.setState({
                            fixedTop:scrollT
                        })
                    }
                }else{
                    this.setState({
                        scrollT:0
                    })
                    if(scrollT > 64 && this.state.fixedTop!==0){
                        this.setState({
                            fixedTop:0
                        })
                    }
                }
                lastScrollY = scrollT
            }
        };
    }

    componentDidUpdate(){
        let {windowH,contentH,scrollT} = getSize();
        const {topics} = this.props;
        // 第一次切换到没有加载数据的tab时，在willReceiveProp中已经将页面滚动了一定距离，在render中打印scrollT也不为0
        // 但是一进入这个函数scrollT就变为0,而且也未触发onscroll事件（问题待解决），所以目前只能去重新判断这种情况
        if(scrollT===0 && this.state.scrollT > 0){
            window.scrollTo(0,this.state.scrollT)
        }

        // 判断内容加载后，内容的高度是否填满屏幕，若网页太高，加载一次内容的高度不能填满整个网页，则继续请求数据
        if(topics.length>0 && windowH + 200 > contentH ){
            this.loadMore();
        }
        // console.log('componentDidUpdate',getSize().scrollT)
    }
    componentWillUnmount(){
        let {scrollT} = getSize();

        // console.log(scrollT);
        const {selectedTab,dispatch} = this.props;
        dispatch(recordScrollT(selectedTab,scrollT));
        // 必须解绑事件，否则当组件再次被加载时，该事件会监听两个组件
        window.onscroll = null;
    }
}

function mapStateToProps(state) {
    const {homePage,article} = state;
    const {selectedTab, tabData} = homePage;
    const {isFetching, page, scrollT, topics} = tabData[selectedTab] || {
        isFetching: false,
        page: 0,
        scrollT: 0,
        topics: []
    };

    // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
    return {selectedTab, tabData, isFetching, page, scrollT, topics,article}
}
export default connect(mapStateToProps)(HomePage)
