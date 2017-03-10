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
	
	var _actions = __webpack_require__(799);
	
	var _reactRedux = __webpack_require__(538);
	
	var _Header = __webpack_require__(767);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Lists = __webpack_require__(805);
	
	var _Lists2 = _interopRequireDefault(_Lists);
	
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
	        _this.state = {};
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
	        _this.handleClick = function (tab) {
	            var _this$props = _this.props,
	                selectedTab = _this$props.selectedTab,
	                dispatch = _this$props.dispatch;
	
	            dispatch((0, _actions.selectTab)(tab));
	        };
	        return _this;
	    }
	
	    _createClass(HomePage, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            console.log(this.props);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            dispatch((0, _actions.fetchTopics)(selectedTab));
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                selectedTab = _props.selectedTab,
	                dispatch = _props.dispatch;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    _Header2.default,
	                    { tabs: this.tabs, filter: selectedTab, onClick: this.handleClick },
	                    this.tabs.map(function (tab, index) {
	                        return _react2.default.createElement(_Lists2.default, { key: index });
	                    })
	                )
	            );
	        }
	    }]);
	
	    return HomePage;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var homePage = state.homePage;
	    var selectedTab = homePage.selectedTab,
	        tabData = homePage.tabData;
	    // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
	
	    return { selectedTab: selectedTab, tabData: tabData };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ }

})
//# sourceMappingURL=0.fce01fa8937e192dc8eb.hot-update.js.map