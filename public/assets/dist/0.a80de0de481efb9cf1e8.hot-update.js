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
	        _this.state = {
	            isFreshing: false
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
	        _this.handleClick = function (tab) {
	            var _this$props = _this.props,
	                selectedTab = _this$props.selectedTab,
	                dispatch = _this$props.dispatch;
	
	            dispatch((0, _actions.selectTab)(tab));
	        };
	        return _this;
	    }
	
	    _createClass(HomePage, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            var topics = newProps.topics,
	                selectedTab = newProps.selectedTab,
	                isFetching = newProps.isFetching,
	                dispatch = newProps.dispatch,
	                scrollT = newProps.scrollT;
	            // fetchTopics开始后会先发送一个request的action,这个ation也会改变state从而触发该方法。如果不对isFetching进行判断，会再次进行fetchTopics从而进行了不必要的重复数据请求
	
	            if (!isFetching && topics.length === 0) {
	                dispatch((0, _actions.fetchTopics)(selectedTab));
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                selectedTab = _props.selectedTab,
	                dispatch = _props.dispatch,
	                topics = _props.topics;
	
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
	                            _react2.default.createElement(_Lists2.default, { topics: topics })
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props2 = this.props,
	                selectedTab = _props2.selectedTab,
	                dispatch = _props2.dispatch;
	
	
	            dispatch((0, _actions.fetchTopics)(selectedTab));
	        }
	    }]);
	
	    return HomePage;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    var homePage = state.homePage;
	    var selectedTab = homePage.selectedTab,
	        tabData = homePage.tabData;
	
	    var _ref = tabData[selectedTab] || { isFetching: false, page: 0, scrollT: 0, topics: [] },
	        isFetching = _ref.isFetching,
	        page = _ref.page,
	        scrollT = _ref.scrollT,
	        topics = _ref.topics;
	
	    // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
	
	
	    return { selectedTab: selectedTab, tabData: tabData, isFetching: isFetching, page: page, scrollT: scrollT, topics: topics };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _List = __webpack_require__(806);
	
	var _Divider = __webpack_require__(815);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _reactRouter = __webpack_require__(474);
	
	var _Subheader = __webpack_require__(808);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Avatar = __webpack_require__(817);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(717);
	
	var _IconButton = __webpack_require__(770);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(819);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(820);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(837);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactSwipeableViews = __webpack_require__(782);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	var _routePrefix = __webpack_require__(766);
	
	var _routePrefix2 = _interopRequireDefault(_routePrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	    link: {
	        display: "block",
	        textDecoration: "none"
	    }
	};
	var iconButtonElement = _react2.default.createElement(
	    _IconButton2.default,
	    {
	        touch: true,
	        tooltip: "more",
	        tooltipPosition: "bottom-left"
	    },
	    _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	);
	
	var rightIconMenu = _react2.default.createElement(
	    _IconMenu2.default,
	    { iconButtonElement: iconButtonElement },
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Reply"
	    ),
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Forward"
	    ),
	    _react2.default.createElement(
	        _MenuItem2.default,
	        null,
	        "Delete"
	    )
	);
	
	var Lists = function (_React$Component) {
	    _inherits(Lists, _React$Component);
	
	    function Lists(props) {
	        _classCallCheck(this, Lists);
	
	        var _this = _possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).call(this, props));
	
	        _this.displayName = "Lists";
	        return _this;
	    }
	
	    _createClass(Lists, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            console.log(this.props);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _reactSwipeableViews2.default,
	                null,
	                _react2.default.createElement(
	                    _List.List,
	                    null,
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: _routePrefix2.default + "/Article", style: styles.link },
	                        _react2.default.createElement(_List.ListItem, {
	                            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: "./public/assets/images/img.png" }),
	                            primaryText: "Brunch this weekend?",
	                            secondaryText: _react2.default.createElement(
	                                "p",
	                                null,
	                                _react2.default.createElement(
	                                    "span",
	                                    { style: { color: _colors.darkBlack } },
	                                    "Brendan Lim"
	                                ),
	                                " -- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?"
	                            ),
	                            secondaryTextLines: 2
	                        }),
	                        _react2.default.createElement(_Divider2.default, { inset: true })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Lists;
	}(_react2.default.Component);
	
	exports.default = Lists;

/***/ }

})
//# sourceMappingURL=0.a80de0de481efb9cf1e8.hot-update.js.map