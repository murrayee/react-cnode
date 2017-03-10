webpackHotUpdate(0,{

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TodoStore = exports.todoAction = exports.TODO_LIST = exports.GET_COLLECTED_TOPICS = exports.MARK_ALL_MESSAGES = exports.FETCH_MESSAGE = exports.PUBLISH_TOPIC = exports.RECORD_ARTICLE_SCROLLT = exports.SWITCH_COLLECTED = exports.FETCH_COMMENT = exports.SWITCH_SUPPORT = exports.RECEIVE_PROFILE = exports.REQUEST_PROFILE = exports.LOGOUT = exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.CURRENT_ROUTER = exports.CHANGE_CURRENT_TOPICID = exports.RECEIVE_ARTICLE = exports.REQUEST_ARTICLE = exports.RECORD_SCROLLT = exports.SELECT_TAB = exports.RECEIVE_TOPICS = exports.REQUEST_TOPICS = undefined;
	
	var _isomorphicFetch = __webpack_require__(800);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _events = __webpack_require__(855);
	
	var _objectAssign = __webpack_require__(300);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//action的类型
	var REQUEST_TOPICS = exports.REQUEST_TOPICS = 'REQUEST_TOPICS';
	var RECEIVE_TOPICS = exports.RECEIVE_TOPICS = 'RECEIVE_TOPICS';
	var SELECT_TAB = exports.SELECT_TAB = 'SELECT_TAB';
	var RECORD_SCROLLT = exports.RECORD_SCROLLT = 'RECORD_SCROLLT';
	var REQUEST_ARTICLE = exports.REQUEST_ARTICLE = 'REQUEST_ARTICLE';
	var RECEIVE_ARTICLE = exports.RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
	var CHANGE_CURRENT_TOPICID = exports.CHANGE_CURRENT_TOPICID = 'CHANGE_CURRENT_TOPICID';
	var CURRENT_ROUTER = exports.CURRENT_ROUTER = 'CURRENT_ROUTER';
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
	var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';
	var REQUEST_PROFILE = exports.REQUEST_PROFILE = 'REQUEST_PROFILE';
	var RECEIVE_PROFILE = exports.RECEIVE_PROFILE = 'RECEIVE_PROFILE';
	var SWITCH_SUPPORT = exports.SWITCH_SUPPORT = 'SWITCH_SUPPORT';
	var FETCH_COMMENT = exports.FETCH_COMMENT = 'FETCH_COMMENT';
	var SWITCH_COLLECTED = exports.SWITCH_COLLECTED = 'SWITCH_COLLECTED';
	var RECORD_ARTICLE_SCROLLT = exports.RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT';
	var PUBLISH_TOPIC = exports.PUBLISH_TOPIC = 'PUBLISH_TOPIC';
	var FETCH_MESSAGE = exports.FETCH_MESSAGE = 'FETCH_MESSAGE';
	var MARK_ALL_MESSAGES = exports.MARK_ALL_MESSAGES = 'MARK_ALL_MESSAGES';
	var GET_COLLECTED_TOPICS = exports.GET_COLLECTED_TOPICS = 'GET_COLLECTED_TOPICS';
	var TODO_LIST = exports.TODO_LIST = "TODO_LIST";
	
	var todoAction = exports.todoAction = {
	    type: TODO_LIST
	};
	
	var TodoStore = exports.TodoStore = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {
	    items: {
	        todos: [{ id: 0, name: 'Todo one', done: false }, { id: 1, name: 'Todo two', done: false }, { id: 2, name: 'Todo three', done: false }]
	    },
	
	    nextId: 3,
	
	    getAll: function getAll() {
	        return this.items;
	    },
	
	    emitChange: function emitChange() {
	        this.emit('change');
	    },
	
	    addChangeListener: function addChangeListener(callback) {
	        this.on('change', callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener('change', callback);
	    },
	
	    addNewTodo: function addNewTodo(todo) {
	        var todos = this.items.todos;
	        if (!todos || typeof this.items.todos.length !== 'number') {
	            this.items.todos = [];
	        }
	        todo.id = this.nextId++;
	        todo.done = false;
	        this.items.todos.push(todo);
	    },
	
	    toggleDone: function toggleDone(id) {
	        this.items.todos = this.items.todos.map(function (todo) {
	            if (todo.id === id) {
	                todo.done = !todo.done;
	            }
	            return todo;
	        });
	    },
	
	    deleteTodo: function deleteTodo(id) {
	        this.items.todos = this.items.todos.filter(function (todo) {
	            return todo.id !== id;
	        });
	    }
	});

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
	                        _react2.default.createElement("input", { type: "button", value: "ADD" })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Publish;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)()(Publish);

/***/ },

/***/ 855:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }

})
//# sourceMappingURL=0.6dba16dedbd7df42aa99.hot-update.js.map