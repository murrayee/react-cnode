webpackHotUpdate(0,{

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _FontIcon = __webpack_require__(546);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _BottomNavigation = __webpack_require__(642);
	
	var _Paper = __webpack_require__(674);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _locationOn = __webpack_require__(677);
	
	var _locationOn2 = _interopRequireDefault(_locationOn);
	
	var _MuiThemeProvider = __webpack_require__(689);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var recentsIcon = _react2.default.createElement(
	    _FontIcon2.default,
	    { className: "material-icons" },
	    "restore"
	);
	var favoritesIcon = _react2.default.createElement(
	    _FontIcon2.default,
	    { className: "material-icons" },
	    "favorite"
	);
	var nearbyIcon = _react2.default.createElement(_locationOn2.default, null);
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
	            selectedIndex: 3
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
	                        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                            label: "\u6D88\u606F",
	                            icon: nearbyIcon,
	                            onTouchTap: function onTouchTap() {
	                                return _this2.select(0);
	                            }
	                        }),
	                        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                            label: "\u53D1\u8868",
	                            icon: nearbyIcon,
	                            onTouchTap: function onTouchTap() {
	                                return _this2.select(1);
	                            }
	                        }),
	                        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                            icon: _react2.default.createElement(
	                                "span",
	                                { style: styles.radius },
	                                nearbyIcon
	                            ),
	                            onTouchTap: function onTouchTap() {
	                                return _this2.select(2);
	                            }
	                        }),
	                        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                            label: "\u5E94\u7528",
	                            icon: nearbyIcon,
	                            onTouchTap: function onTouchTap() {
	                                return _this2.select(3);
	                            }
	                        }),
	                        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	                            label: "\u6211\u7684",
	                            icon: nearbyIcon,
	                            onTouchTap: function onTouchTap() {
	                                return _this2.select(4);
	                            }
	                        })
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
//# sourceMappingURL=0.6bb5393c05c1d0dfe254.hot-update.js.map