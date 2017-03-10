webpackHotUpdate(0,{

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actions = __webpack_require__(566);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	//
	function tabDataItem() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFetching: false, page: 0, scrollT: 0, topics: [] };
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.REQUEST_TOPICS:
	            return _extends({}, state, {
	                isFetching: true
	            });
	        case _actions.RECEIVE_TOPICS:
	            if (state.page < action.page) {
	                var topics = state.topics;
	                action.topics = topics.concat(action.topics);
	            }
	            return _extends({}, state, {
	                isFetching: false,
	                page: action.page,
	                topics: action.topics,
	                limit: action.limit
	            });
	        case _actions.RECORD_SCROLLT:
	            return _extends({}, state, {
	                scrollT: action.scrollT
	            });
	        default:
	            return state;
	    }
	}
	
	var tabData = function tabData() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.RECEIVE_TOPICS:
	        case _actions.REQUEST_TOPICS:
	        case _actions.RECORD_SCROLLT:
	            return _extends({}, state, _defineProperty({}, action.tab, tabDataItem(state[action.tab], action)));
	        default:
	            return state;
	    }
	};
	
	var homePage = function homePage() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { selectedTab: 'all', tabData: {} };
	    var action = arguments[1];
	
	    if (state) {
	        var sTab = selectedTab(state.selectedTab, action);
	        var tData = tabData(state.tabData, action);
	        // 返回的一定要是一个新的对象，如果只是改变原来的state,返回的还是原来的state对象,就无法被store.subscribe监听到，从而不会对组件状态进行更新
	        return _extends({}, state, { selectedTab: sTab, tabData: tData });
	    }
	    return state;
	};
	
	exports.default = homePage;

/***/ }

})
//# sourceMappingURL=0.17aa19c8bc4e71ce26b3.hot-update.js.map