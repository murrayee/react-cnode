webpackHotUpdate(0,{

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _MuiThemeProvider = __webpack_require__(712);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _AppBar = __webpack_require__(768);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _Tabs = __webpack_require__(774);
	
	var _reactRouter = __webpack_require__(474);
	
	var _Badge = __webpack_require__(779);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _notifications = __webpack_require__(781);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _IconButton = __webpack_require__(770);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _reactSwipeableViews = __webpack_require__(782);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	        _this.displayName = "Header";
	        _this.state = {
	            slideIndex: 0
	        };
	        _this.handleChange = function (value) {
	            // console.log(this.props);
	            _this.setState({
	                slideIndex: value
	            });
	            _this.props.onClick(_this.props.tabs[value].filter);
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _props = this.props,
	                tabs = _props.tabs,
	                filter = _props.filter;
	
	            var slideIndex = void 0;
	            tabs.forEach(function (tab, index) {
	                if (tab.filter === filter) {
	                    slideIndex = index;
	                }
	            });
	            this.setState({
	                slideIndex: slideIndex
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _MuiThemeProvider2.default,
	                null,
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { style: { position: "fixed", top: '0', width: "100%", zIndex: "999" } },
	                        _react2.default.createElement(
	                            _Tabs.Tabs,
	                            { onChange: this.handleChange, value: this.state.slideIndex },
	                            this.props.tabs.map(function (tab, i) {
	                                return _react2.default.createElement(_Tabs.Tab, { key: i, label: tab.title, value: i });
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactSwipeableViews2.default,
	                        { index: this.state.slideIndex, onChangeIndex: this.handleChange },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ }

})
//# sourceMappingURL=0.54fd7d78642c99a10645.hot-update.js.map