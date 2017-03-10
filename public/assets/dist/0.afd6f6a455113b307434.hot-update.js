webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _reactRouter = __webpack_require__(474);
	
	var _Article = __webpack_require__(537);
	
	var _Article2 = _interopRequireDefault(_Article);
	
	var _Login = __webpack_require__(566);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Message = __webpack_require__(797);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _UserPage = __webpack_require__(802);
	
	var _UserPage2 = _interopRequireDefault(_UserPage);
	
	var _HomePage = __webpack_require__(803);
	
	var _HomePage2 = _interopRequireDefault(_HomePage);
	
	var _Publish = __webpack_require__(837);
	
	var _Publish2 = _interopRequireDefault(_Publish);
	
	var _App = __webpack_require__(838);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _routePrefix = __webpack_require__(766);
	
	var _routePrefix2 = _interopRequireDefault(_routePrefix);
	
	var _reactRedux = __webpack_require__(538);
	
	var _store = __webpack_require__(839);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactTapEventPlugin = __webpack_require__(849);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactTapEventPlugin2.default)();
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _store2.default },
	    _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.hashHistory },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: _routePrefix2.default + '/', component: _App2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/Article', component: _Article2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/HomePage', component: _HomePage2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/Login', component: _Login2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/Message', component: _Message2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/UserPage', component: _UserPage2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/Publish', component: _Publish2.default })
	        )
	    )
	), document.getElementById('app'));

/***/ },

/***/ 797:
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
	
	var _actions = __webpack_require__(799);
	
	var _reactRedux = __webpack_require__(538);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Message = function (_React$Component) {
	    _inherits(Message, _React$Component);
	
	    function Message() {
	        _classCallCheck(this, Message);
	
	        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));
	
	        _this.displayName = "Message";
	        _this.title = "消息中心";
	        return _this;
	    }
	
	    _createClass(Message, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            console.log(this.props);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                value = _props.value,
	                add = _props.add;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("input", { type: "text", value: value }),
	                _react2.default.createElement("input", { type: "button", value: "add", onClick: add })
	            );
	        }
	    }]);
	
	    return Message;
	}(_react2.default.Component);
	
	Message.propTypes = {
	    value: _react.PropTypes.number.isRequired,
	    add: _react.PropTypes.func.isRequired
	};
	//遍历redux的state到组件的props
	function mapStateToProps(state) {
	    return {
	        value: state.message.count
	    };
	}
	//遍历redux的action到组件的props
	function mapDispatchToProps(dispatch) {
	    return {
	        add: function add() {
	            return dispatch(_actions.todoAction);
	        }
	
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Message);

/***/ },

/***/ 837:
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
	                        { style: { width: 200, height: 100, border: "1px solid black" } },
	                        _react2.default.createElement("ul", null)
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: { width: 200 } },
	                        _react2.default.createElement("input", { type: "button", value: "ADD" }),
	                        _react2.default.createElement("input", { type: "button", value: "DEL" })
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
//# sourceMappingURL=0.afd6f6a455113b307434.hot-update.js.map