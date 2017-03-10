webpackHotUpdate(0,{

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	var Lists = function Lists(props) {
	    var tabChn = { all: '全部', good: '精华', share: '分享', ask: '问答', job: '招聘' };
	    var topics = props.topics,
	        dispatch = props.dispatch,
	        isFetching = props.isFetching;
	
	    console.log(props);
	
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
	};
	exports.default = Lists;

/***/ }

})
//# sourceMappingURL=0.64d7b00a7492d0bf7135.hot-update.js.map