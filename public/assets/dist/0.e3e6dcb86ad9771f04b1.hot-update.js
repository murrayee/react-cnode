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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
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
	            console.log(this.props);
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
	            return _react2.default.createElement("div", null);
	        }
	    }]);
	
	    return Article;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var article = state.article.article;
	
	    return { article: article };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Article);

/***/ }

})
//# sourceMappingURL=0.e3e6dcb86ad9771f04b1.hot-update.js.map