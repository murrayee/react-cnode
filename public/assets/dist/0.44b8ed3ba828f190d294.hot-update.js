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
	
	var _events = __webpack_require__(802);
	
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
	//练习
	
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

/***/ }

})
//# sourceMappingURL=0.44b8ed3ba828f190d294.hot-update.js.map