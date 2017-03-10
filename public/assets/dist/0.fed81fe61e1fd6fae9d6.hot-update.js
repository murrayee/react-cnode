webpackHotUpdate(0,{

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _Title = __webpack_require__(798);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	var _reactRedux = __webpack_require__(538);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017/2/20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Publish = function (_React$Component) {
	    _inherits(Publish, _React$Component);
	
	    function Publish(props) {
	        _classCallCheck(this, Publish);
	
	        var _this = _possibleConstructorReturn(this, (Publish.__proto__ || Object.getPrototypeOf(Publish)).call(this, props));
	
	        _this.displayName = "Publish";
	        _this.title = "新增文章";
	        return _this;
	    }
	
	    _createClass(Publish, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_Title2.default, { title: this.title }),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "h1",
	                        null,
	                        "TODOLIST"
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: { width: 200, height: "auto", border: "1px solid black" } },
	                        _react2.default.createElement("ul", null)
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: { marginTop: 20 } },
	                        _react2.default.createElement("input", { type: "text", placeholder: "" }),
	                        _react2.default.createElement("input", { type: "button", value: "ADD" })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Publish;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)()(Publish);

/***/ }

})
//# sourceMappingURL=0.fed81fe61e1fd6fae9d6.hot-update.js.map