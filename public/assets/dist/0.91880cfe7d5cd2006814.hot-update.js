webpackHotUpdate(0,{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(780);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _AppBar = __webpack_require__(782);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(701);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _MuiThemeProvider = __webpack_require__(728);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Title = function Title(props) {
	    var title = props.title;
	
	    return _react2.default.createElement(
	        'div',
	        { className: _styles2.default.header },
	        _react2.default.createElement(
	            _MuiThemeProvider2.default,
	            null,
	            _react2.default.createElement(_AppBar2.default, { title: title, onLeftIconButtonTouchTap: function onLeftIconButtonTouchTap() {
	                    window.history.go(-1);
	                } })
	        )
	    );
	};
	
	exports.default = Title;

/***/ }

})
//# sourceMappingURL=0.91880cfe7d5cd2006814.hot-update.js.map