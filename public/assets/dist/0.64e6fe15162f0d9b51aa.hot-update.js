webpackHotUpdate(0,{

/***/ 539:
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
	
	var _FontIcon = __webpack_require__(540);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _BottomNavigation = __webpack_require__(636);
	
	var _Paper = __webpack_require__(668);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _home = __webpack_require__(671);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _locationOn = __webpack_require__(683);
	
	var _locationOn2 = _interopRequireDefault(_locationOn);
	
	var _MuiThemeProvider = __webpack_require__(684);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _flightTakeoff = __webpack_require__(736);
	
	var _flightTakeoff2 = _interopRequireDefault(_flightTakeoff);
	
	var _cloudDownload = __webpack_require__(737);
	
	var _cloudDownload2 = _interopRequireDefault(_cloudDownload);
	
	var _videogameAsset = __webpack_require__(738);
	
	var _videogameAsset2 = _interopRequireDefault(_videogameAsset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var nearbyIcon = _react2.default.createElement(_locationOn2.default, null);
	var actionHome = _react2.default.createElement(_home2.default, null);
	var actionFlightTakeoff = _react2.default.createElement(_flightTakeoff2.default, null);
	var fileCloudDownload = _react2.default.createElement(_cloudDownload2.default, null);
	var hardwareVideogameAsset = _react2.default.createElement(_videogameAsset2.default, null);
	var styles = {
	    radius: {
	        height: 50,
	        width: 50,
	        borderRadius: 50,
	        border: "1px solid rgb(0, 188, 212)",
	        position: "absolute",
	        top: -25,
	        zIndex: 666,
	        padding: 5
	
	    },
	    slide: {
	        padding: 10
	    }
	};
	
	var Footer = function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer(props) {
	        _classCallCheck(this, Footer);
	
	        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	
	        _this.displayName = "Footer";
	        _this.state = {
	            selectedIndex: 0
	        };
	        _this.select = function (index) {
	            return _this.setState({ selectedIndex: index });
	        };
	        return _this;
	    }
	
	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                _MuiThemeProvider2.default,
	                null,
	                _react2.default.createElement(
	                    _Paper2.default,
	                    { style: { bottom: "0", position: "fixed", width: "100%", border: "1px solid #F5f5f5" }, zDepth: 1 },
	                    _react2.default.createElement(
	                        _BottomNavigation.BottomNavigation,
	                        { selectedIndex: this.state.selectedIndex },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: "/HomePage" },
	                            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                                label: "\u6587\u7AE0",
	                                icon: actionHome,
	                                onTouchTap: function onTouchTap() {
	                                    return _this2.select(0);
	                                }
	                            })
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: "/Message" },
	                            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                                label: "\u6D88\u606F",
	                                icon: actionFlightTakeoff,
	                                onTouchTap: function onTouchTap() {
	                                    return _this2.select(1);
	                                }
	                            })
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: "/Publish" },
	                            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                                label: "\u53D1\u8868",
	                                icon: fileCloudDownload,
	                                onTouchTap: function onTouchTap() {
	                                    return _this2.select(2);
	                                }
	                            })
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: "/UserPage" },
	                            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                                label: "\u6211\u7684",
	                                icon: hardwareVideogameAsset,
	                                onTouchTap: function onTouchTap() {
	                                    return _this2.select(3);
	                                }
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Footer;
	}(_react2.default.Component);
	
	exports.default = Footer;

/***/ }

})
//# sourceMappingURL=0.64e6fe15162f0d9b51aa.hot-update.js.map