webpackHotUpdate(0,{

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _reactRedux = __webpack_require__(538);
	
	var _actions = __webpack_require__(566);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Article = function (_React$Component) {
	    _inherits(Article, _React$Component);
	
	    function Article() {
	        _classCallCheck(this, Article);
	
	        var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this));
	
	        _this.displayName = "Article";
	        _this.state = {
	            a: "我是文章详情"
	        };
	        return _this;
	    }
	
	    _createClass(Article, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _props = this.props,
	                scrollT = _props.scrollT,
	                dispatch = _props.dispatch,
	                article = _props.article,
	                isFetching = _props.isFetching,
	                params = _props.params;
	
	            if (scrollT) {
	                window.scrollTo(0, scrollT);
	            }
	            if (!article.author && !isFetching) {
	                var topicId = params.id;
	                dispatch((0, _actions.fetchArticle)(topicId));
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props2 = this.props,
	                article = _props2.article,
	                currentTopicId = _props2.currentTopicId;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: article.content } })
	            );
	        }
	    }]);
	
	    return Article;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var article = state.article;
	    return { article: article };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Article);

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchArticle = exports.recordArticleScrollT = exports.fetchTopics = exports.recordScrollT = exports.selectTab = exports.todoAction = exports.TODO_LIST = exports.GET_COLLECTED_TOPICS = exports.MARK_ALL_MESSAGES = exports.FETCH_MESSAGE = exports.PUBLISH_TOPIC = exports.RECORD_ARTICLE_SCROLLT = exports.SWITCH_COLLECTED = exports.FETCH_COMMENT = exports.SWITCH_SUPPORT = exports.RECEIVE_PROFILE = exports.REQUEST_PROFILE = exports.LOGOUT = exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.CURRENT_ROUTER = exports.CHANGE_CURRENT_TOPICID = exports.RECEIVE_ARTICLE = exports.REQUEST_ARTICLE = exports.RECORD_SCROLLT = exports.SELECT_TAB = exports.RECEIVE_TOPICS = exports.REQUEST_TOPICS = undefined;
	
	var _isomorphicFetch = __webpack_require__(567);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _events = __webpack_require__(569);
	
	var _objectAssign = __webpack_require__(300);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//action的类型
	var REQUEST_TOPICS = exports.REQUEST_TOPICS = 'REQUEST_TOPICS';
	var RECEIVE_TOPICS = exports.RECEIVE_TOPICS = 'RECEIVE_TOPICS';
	var SELECT_TAB = exports.SELECT_TAB = 'SELECT_TAB';
	var RECORD_SCROLLT = exports.RECORD_SCROLLT = 'RECORD_SCROLLT';
	var REQUEST_ARTICLE = exports.REQUEST_ARTICLE = 'REQUEST_ARTICLE';
	var RECEIVE_ARTICLE = exports.RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
	var CHANGE_CURRENT_TOPICID = exports.CHANGE_CURRENT_TOPICID = 'CHANGE_CURRENT_TOPICID';
	var CURRENT_ROUTER = exports.CURRENT_ROUTER = 'CURRENT_ROUTER';
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
	var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';
	var REQUEST_PROFILE = exports.REQUEST_PROFILE = 'REQUEST_PROFILE';
	var RECEIVE_PROFILE = exports.RECEIVE_PROFILE = 'RECEIVE_PROFILE';
	var SWITCH_SUPPORT = exports.SWITCH_SUPPORT = 'SWITCH_SUPPORT';
	var FETCH_COMMENT = exports.FETCH_COMMENT = 'FETCH_COMMENT';
	var SWITCH_COLLECTED = exports.SWITCH_COLLECTED = 'SWITCH_COLLECTED';
	var RECORD_ARTICLE_SCROLLT = exports.RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT';
	var PUBLISH_TOPIC = exports.PUBLISH_TOPIC = 'PUBLISH_TOPIC';
	var FETCH_MESSAGE = exports.FETCH_MESSAGE = 'FETCH_MESSAGE';
	var MARK_ALL_MESSAGES = exports.MARK_ALL_MESSAGES = 'MARK_ALL_MESSAGES';
	var GET_COLLECTED_TOPICS = exports.GET_COLLECTED_TOPICS = 'GET_COLLECTED_TOPICS';
	//练习
	var TODO_LIST = exports.TODO_LIST = "TODO_LIST";
	var todoAction = exports.todoAction = {
	    type: TODO_LIST
	};
	// homePage
	var selectTab = exports.selectTab = function selectTab(tab) {
	    return {
	        type: SELECT_TAB, tab: tab
	    };
	};
	
	var requestTopics = function requestTopics(tab) {
	    return {
	        type: REQUEST_TOPICS,
	        tab: tab
	    };
	};
	
	var receiveTopics = function receiveTopics(tab, topics, page, limit) {
	    return {
	        type: RECEIVE_TOPICS,
	        tab: tab,
	        topics: topics,
	        page: page,
	        limit: limit
	    };
	};
	var recordScrollT = exports.recordScrollT = function recordScrollT(tab, scrollT) {
	    return {
	        type: RECORD_SCROLLT,
	        tab: tab,
	        scrollT: scrollT
	    };
	};
	var fetchTopics = exports.fetchTopics = function fetchTopics(tab) {
	    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
	
	    return function (dispatch) {
	        dispatch(requestTopics(tab));
	        (0, _isomorphicFetch2.default)('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + page + '&limit=' + limit).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            return dispatch(receiveTopics(tab, json.data, page, limit));
	        });
	    };
	};
	
	// Article
	var requestArticle = function requestArticle(topicId) {
	    return {
	        type: REQUEST_ARTICLE,
	        topicId: topicId
	    };
	};
	var receiveArticle = function receiveArticle(topicId, article) {
	    return {
	        type: RECEIVE_ARTICLE,
	        topicId: topicId,
	        article: article
	    };
	};
	var changeCurrentTopicId = function changeCurrentTopicId(topicId) {
	    return {
	        type: CHANGE_CURRENT_TOPICID,
	        topicId: topicId
	    };
	};
	
	var recordArticleScrollT = exports.recordArticleScrollT = function recordArticleScrollT(topicId, scrollT) {
	    return {
	        type: RECORD_ARTICLE_SCROLLT,
	        topicId: topicId,
	        scrollT: scrollT
	    };
	};
	var fetchArticle = exports.fetchArticle = function fetchArticle(topicId) {
	    var request = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    return function (dispatch) {
	        if (request) {
	            dispatch(requestArticle(topicId));
	            (0, _isomorphicFetch2.default)('https://cnodejs.org/api/v1/topic/' + topicId).then(function (response) {
	                return response.json();
	            }).then(function (json) {
	                return dispatch(receiveArticle(topicId, json.data));
	            });
	        } else {
	            dispatch(changeCurrentTopicId(topicId));
	        }
	    };
	};

/***/ }

})
//# sourceMappingURL=0.6035d3d5bd4c1b3b4f2e.hot-update.js.map