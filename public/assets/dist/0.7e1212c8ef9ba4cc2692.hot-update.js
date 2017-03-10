webpackHotUpdate(0,{

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _Tabs = __webpack_require__(547);
	
	var _reactRouter = __webpack_require__(474);
	
	var _MuiThemeProvider = __webpack_require__(675);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _AppBar = __webpack_require__(727);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _Badge = __webpack_require__(749);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _notifications = __webpack_require__(751);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _IconButton = __webpack_require__(729);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _reactSwipeableViews = __webpack_require__(752);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var styles = {
	    header: {
	        position: "fixed",
	        overflow: "hidden",
	        zIndex: "10",
	        width: "100%",
	        left: "0",
	        transition: " all 0.3s "
	    }
	
	};
	
	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	        _this.displayName = "Header";
	        _this.state = {
	            slideIndex: 0
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
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
	                        { className: styles.header, style: { top: -this.props.fixedTop } },
	                        _react2.default.createElement(_AppBar2.default, { title: _react2.default.createElement(
	                                "p",
	                                { style: { textAlign: 'center' } },
	                                "NodeJS\u8BBA\u575B"
	                            ), onLeftIconButtonTouchTap: this.props.toggleDrawer,
	                            iconElementRight: _react2.default.createElement("div", { style: { marginTop: -8 } }) })
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
//# sourceMappingURL=0.7e1212c8ef9ba4cc2692.hot-update.js.map