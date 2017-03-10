webpackHotUpdate(0,{

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _MuiThemeProvider = __webpack_require__(690);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _Tabs = __webpack_require__(753);
	
	var _reactRouter = __webpack_require__(474);
	
	var _reactSwipeableViews = __webpack_require__(758);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	    headline: {
	        fontSize: 24,
	        paddingTop: 16,
	        marginBottom: 12,
	        fontWeight: 400
	    },
	    slide: {
	        padding: 10
	    }
	};
	
	var ArtTabs = function (_React$Component) {
	    _inherits(ArtTabs, _React$Component);
	
	    function ArtTabs(props) {
	        _classCallCheck(this, ArtTabs);
	
	        var _this = _possibleConstructorReturn(this, (ArtTabs.__proto__ || Object.getPrototypeOf(ArtTabs)).call(this, props));
	
	        _this.displayName = "ArtTabs";
	        _this.state = {
	            slideIndex: 0
	        };
	        _this.handleChange = function (value) {
	            _this.setState({
	                slideIndex: value
	            });
	        };
	        return _this;
	    }
	
	    _createClass(ArtTabs, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    _MuiThemeProvider2.default,
	                    null,
	                    _react2.default.createElement(
	                        _Tabs.Tabs,
	                        { value: this.state.slideIndex },
	                        _react2.default.createElement(_Tabs.Tab, { label: "\u5168\u90E8", Link: true, value: 0 }),
	                        _react2.default.createElement(_Tabs.Tab, { label: "\u7CBE\u534E", value: 1 }),
	                        _react2.default.createElement(_Tabs.Tab, { label: "\u5206\u4EAB", value: 2 }),
	                        _react2.default.createElement(_Tabs.Tab, { label: "\u95EE\u7B54", value: 3 }),
	                        _react2.default.createElement(_Tabs.Tab, { label: "\u62DB\u8058", value: 4 })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ArtTabs;
	}(_react2.default.Component);
	
	exports.default = ArtTabs;

/***/ }

})
//# sourceMappingURL=0.fed19ba995c72da2de0c.hot-update.js.map