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
	
	var _getSize2 = __webpack_require__(570);
	
	var _getSize3 = _interopRequireDefault(_getSize2);
	
	var _Content = __webpack_require__(571);
	
	var _Content2 = _interopRequireDefault(_Content);
	
	var _Title = __webpack_require__(779);
	
	var _Title2 = _interopRequireDefault(_Title);
	
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
	            fadeIn: true
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
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            var scrollT = newProps.scrollT;
	
	            window.scrollTo(0, scrollT);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.setState({
	                fadeIn: false
	            });
	
	            var _getSize = (0, _getSize3.default)(),
	                scrollT = _getSize.scrollT;
	
	            var _props2 = this.props,
	                currentTopicId = _props2.currentTopicId,
	                dispatch = _props2.dispatch;
	
	            dispatch((0, _actions.recordArticleScrollT)(currentTopicId, scrollT));
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props3 = this.props,
	                isFetching = _props3.isFetching,
	                article = _props3.article,
	                currentTopicId = _props3.currentTopicId,
	                isCommented = _props3.isCommented,
	                dispatch = _props3.dispatch;
	
	            return _react2.default.createElement(
	                "div",
	                { style: { marginBottom: "48px", overflow: "hidden" } },
	                _react2.default.createElement(_Title2.default, { isFetching: isFetching, title: "\u6587\u7AE0\u8BE6\u60C5", showBack: true }),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    Object.keys(article).length !== 0 && _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(_Content2.default, { article: article, dispatch: dispatch })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Article;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var currentRouter = state.currentRouter;
	    var _state$article = state.article,
	        currentTopicId = _state$article.currentTopicId,
	        isCommented = _state$article.isCommented;
	
	
	    var isFetching = state.article[currentTopicId] ? state.article[currentTopicId].isFetching : false;
	    var scrollT = state.article[currentTopicId] ? state.article[currentTopicId].scrollT : '0';
	    var article = state.article[currentTopicId] && state.article[currentTopicId].article ? state.article[currentTopicId].article : {};
	    return { isFetching: isFetching, scrollT: scrollT, article: article, currentTopicId: currentTopicId, currentRouter: currentRouter, isCommented: isCommented };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Article);

/***/ }

})
//# sourceMappingURL=0.5df53c6e0a8ab28c53b2.hot-update.js.map