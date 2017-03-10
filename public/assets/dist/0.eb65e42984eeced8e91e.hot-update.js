webpackHotUpdate(0,{

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _MuiThemeProvider = __webpack_require__(689);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _Tabs = __webpack_require__(749);
	
	var _reactSwipeableViews = __webpack_require__(754);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
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
	
	var MainTabs = function (_React$Component) {
	    _inherits(MainTabs, _React$Component);
	
	    function MainTabs(props) {
	        _classCallCheck(this, MainTabs);
	
	        var _this = _possibleConstructorReturn(this, (MainTabs.__proto__ || Object.getPrototypeOf(MainTabs)).call(this, props));
	
	        _this.displayName = "MainTabs";
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
	
	    _createClass(MainTabs, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    _MuiThemeProvider2.default,
	                    null,
	                    "1231231"
	                )
	            );
	        }
	    }]);
	
	    return MainTabs;
	}(_react2.default.Component);
	
	exports.default = MainTabs;

/***/ }

})
//# sourceMappingURL=0.eb65e42984eeced8e91e.hot-update.js.map