webpackHotUpdate(0,{

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _reactRouter = __webpack_require__(474);
	
	var _actions = __webpack_require__(566);
	
	var _CircleLoading = __webpack_require__(805);
	
	var _CircleLoading2 = _interopRequireDefault(_CircleLoading);
	
	var _reactRedux = __webpack_require__(538);
	
	var _Header = __webpack_require__(771);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Lists = __webpack_require__(809);
	
	var _Lists2 = _interopRequireDefault(_Lists);
	
	var _getSize5 = __webpack_require__(808);
	
	var _getSize6 = _interopRequireDefault(_getSize5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var HomePage = function (_React$Component) {
	    _inherits(HomePage, _React$Component);
	
	    function HomePage(props) {
	        _classCallCheck(this, HomePage);
	
	        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	
	        _this.displayName = "HomePage";
	        _this.state = {
	            isFreshing: false,
	            fixedTop: 0,
	            scrollT: 0
	        };
	        _this.tabs = [{
	            title: '全部',
	            filter: 'all'
	        }, {
	            title: '精华',
	            filter: 'good'
	        }, {
	            title: '分享',
	            filter: 'share'
	        }, {
	            title: '问答',
	            filter: 'ask'
	        }, {
	            title: '招聘',
	            filter: 'job'
	        }];
	        _this.onRefresh = function (next) {
	            if (!_this.state.isFreshing) {
	                _this.setState({
	                    isFreshing: true
	                });
	                _this.fresh();
	                setTimeout(function (_) {
	                    next();
	                    _this.setState({
	                        isFreshing: false
	                    });
	                }, 3000);
	            }
	        };
	        _this.fresh = function () {
	            var _this$props = _this.props,
	                selectedTab = _this$props.selectedTab,
	                dispatch = _this$props.dispatch;
	
	            dispatch((0, _actions.fetchTopics)(selectedTab, 1));
	        };
	        _this.handleClick = function (tab) {
	            var _getSize = (0, _getSize6.default)(),
	                scrollT = _getSize.scrollT;
	
	            var _this$props2 = _this.props,
	                selectedTab = _this$props2.selectedTab,
	                dispatch = _this$props2.dispatch,
	                tabData = _this$props2.tabData;
	
	            dispatch((0, _actions.recordScrollT)(selectedTab, scrollT));
	            dispatch((0, _actions.selectTab)(tab));
	            var ua = navigator.userAgent;
	            if (!tabData[tab] && ua.indexOf('Mobile') === -1) {
	                if (scrollT >= 64) {
	                    dispatch((0, _actions.recordScrollT)(tab, 64));
	                    _this.setState({
	                        scrollT: 64
	                    });
	                } else {
	                    dispatch((0, _actions.recordScrollT)(tab, scrollT));
	                    _this.setState({
	                        scrollT: scrollT
	                    });
	                }
	            }
	        };
	        _this.loadMore = function () {
	            var _this$props3 = _this.props,
	                selectedTab = _this$props3.selectedTab,
	                page = _this$props3.page,
	                isFetching = _this$props3.isFetching,
	                dispatch = _this$props3.dispatch;
	
	            var ipage = page;
	            if (!isFetching) {
	                dispatch((0, _actions.fetchTopics)(selectedTab, ++ipage));
	            }
	        };
	        return _this;
	    }
	
	    _createClass(HomePage, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            var topics = newProps.topics,
	                isFetching = newProps.isFetching,
	                selectedTab = newProps.selectedTab,
	                scrollT = newProps.scrollT,
	                dispatch = newProps.dispatch;
	
	            console.log(topics);
	            // 去除刷新时记住的滚动条位置
	            if (topics.length === 0 && this.props.scrollT === 0) {
	                window.scrollTo(0, 0);
	            }
	            // fetchTopics开始后会先发送一个request的action,这个ation也会改变state从而触发该方法。如果不对isFetching进行判断，会再次进行fetchTopics从而进行了不必要的重复数据请求
	            if (!isFetching && topics.length === 0) {
	                dispatch((0, _actions.fetchTopics)(selectedTab));
	            }
	            if (selectedTab !== this.props.selectedTab) {
	                if (scrollT) {
	                    window.scrollTo(0, scrollT);
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                selectedTab = _props.selectedTab,
	                isFetching = _props.isFetching,
	                page = _props.page,
	                topics = _props.topics,
	                dispatch = _props.dispatch,
	                tabData = _props.tabData;
	            // console.log(this.props)
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    _Header2.default,
	                    { tabs: this.tabs, filter: selectedTab, onClick: this.handleClick },
	                    this.tabs.map(function (tab, index) {
	                        return _react2.default.createElement(
	                            "div",
	                            { key: index },
	                            tab.filter === selectedTab && _react2.default.createElement(
	                                "div",
	                                { style: { opacity: !isFetching || page >= 1 ? 1 : 0 } },
	                                _react2.default.createElement(_Lists2.default, { topics: topics, dispatch: dispatch, isFetching: isFetching })
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var _props2 = this.props,
	                selectedTab = _props2.selectedTab,
	                page = _props2.page,
	                scrollT = _props2.scrollT,
	                dispatch = _props2.dispatch;
	
	            if (page === 0) {
	                dispatch((0, _actions.fetchTopics)(selectedTab));
	            }
	            if (scrollT) {
	                window.scrollTo(0, scrollT);
	            }
	            var lastScrollY = this.lastScrollY;
	
	            window.onscroll = function () {
	                var _getSize2 = (0, _getSize6.default)(),
	                    windowH = _getSize2.windowH,
	                    contentH = _getSize2.contentH,
	                    scrollT = _getSize2.scrollT;
	
	                if (windowH + scrollT + 100 > contentH) {
	                    _this2.loadMore();
	                }
	                var ua = navigator.userAgent;
	                if (ua.indexOf('Mobile') === -1) {
	                    if (!lastScrollY || !scrollT) {
	                        lastScrollY = scrollT;
	                    }
	                    var diff = scrollT - lastScrollY;
	                    if (diff >= 0) {
	                        if (scrollT > 64 && _this2.state.fixedTop !== 64) {
	                            _this2.setState({
	                                fixedTop: 64
	                            });
	                        }
	                        if (scrollT <= 64) {
	                            _this2.setState({
	                                fixedTop: scrollT
	                            });
	                        }
	                    } else {
	                        _this2.setState({
	                            scrollT: 0
	                        });
	                        if (scrollT > 64 && _this2.state.fixedTop !== 0) {
	                            _this2.setState({
	                                fixedTop: 0
	                            });
	                        }
	                    }
	                    lastScrollY = scrollT;
	                }
	            };
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            var _getSize3 = (0, _getSize6.default)(),
	                windowH = _getSize3.windowH,
	                contentH = _getSize3.contentH,
	                scrollT = _getSize3.scrollT;
	
	            var topics = this.props.topics;
	            // 第一次切换到没有加载数据的tab时，在willReceiveProp中已经将页面滚动了一定距离，在render中打印scrollT也不为0
	            // 但是一进入这个函数scrollT就变为0,而且也未触发onscroll事件（问题待解决），所以目前只能去重新判断这种情况
	
	            if (scrollT === 0 && this.state.scrollT > 0) {
	                window.scrollTo(0, this.state.scrollT);
	            }
	
	            // 判断内容加载后，内容的高度是否填满屏幕，若网页太高，加载一次内容的高度不能填满整个网页，则继续请求数据
	            if (topics.length > 0 && windowH + 200 > contentH) {
	                this.loadMore();
	            }
	            // console.log('componentDidUpdate',getSize().scrollT)
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _getSize4 = (0, _getSize6.default)(),
	                scrollT = _getSize4.scrollT;
	
	            var _props3 = this.props,
	                selectedTab = _props3.selectedTab,
	                dispatch = _props3.dispatch;
	
	            dispatch((0, _actions.recordScrollT)(selectedTab, scrollT));
	            // 必须解绑事件，否则当组件再次被加载时，该事件会监听两个组件
	            window.onscroll = null;
	        }
	    }]);
	
	    return HomePage;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var homePage = state.homePage;
	    var selectedTab = homePage.selectedTab,
	        tabData = homePage.tabData;
	
	    var _ref = tabData[selectedTab] || {
	        isFetching: false,
	        page: 0,
	        scrollT: 0,
	        topics: []
	    },
	        isFetching = _ref.isFetching,
	        page = _ref.page,
	        scrollT = _ref.scrollT,
	        topics = _ref.topics;
	
	    // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
	
	
	    return { selectedTab: selectedTab, tabData: tabData, isFetching: isFetching, page: page, scrollT: scrollT, topics: topics };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ }

})
//# sourceMappingURL=0.65f0190d2ddd2d70b6c3.hot-update.js.map