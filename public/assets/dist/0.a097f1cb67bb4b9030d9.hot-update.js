webpackHotUpdate(0,{

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _List = __webpack_require__(773);
	
	var _Divider = __webpack_require__(782);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _reactRouter = __webpack_require__(474);
	
	var _Subheader = __webpack_require__(775);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Avatar = __webpack_require__(784);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(690);
	
	var _IconButton = __webpack_require__(742);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(786);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(787);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(804);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactSwipeableViews = __webpack_require__(754);
	
	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	    // componentWillMount(){
	    //     console.log(this.props)
	    // }
	
	
	    _createClass(Lists, [{
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
	                        { to: "Article" },
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
	                        })
	                    ),
	                    _react2.default.createElement(_Divider2.default, { inset: true }),
	                    _react2.default.createElement(_List.ListItem, {
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: "./public/assets/images/img.png" }),
	                        primaryText: _react2.default.createElement(
	                            "p",
	                            null,
	                            "Summer BBQ\xA0\xA0",
	                            _react2.default.createElement(
	                                "span",
	                                { style: { color: _colors.lightBlack } },
	                                "4"
	                            )
	                        ),
	                        secondaryText: _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "span",
	                                { style: { color: _colors.darkBlack } },
	                                "to me, Scott, Jennifer"
	                            ),
	                            " -- Wish I could come, but I'm out of town this weekend."
	                        ),
	                        secondaryTextLines: 2
	                    }),
	                    _react2.default.createElement(_Divider2.default, { inset: true }),
	                    _react2.default.createElement(_List.ListItem, {
	                        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: "./public/assets/images/img.png" }),
	                        primaryText: "Oui oui",
	                        secondaryText: _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "span",
	                                { style: { color: _colors.darkBlack } },
	                                "Grace Ng"
	                            ),
	                            " -- Do you have Paris recommendations? Have you ever been?"
	                        ),
	                        secondaryTextLines: 2
	                    }),
	                    _react2.default.createElement(_Divider2.default, { inset: true })
	                )
	            );
	        }
	    }]);
	
	    return Lists;
	}(_react2.default.Component);
	
	exports.default = Lists;

/***/ }

})
//# sourceMappingURL=0.a097f1cb67bb4b9030d9.hot-update.js.map