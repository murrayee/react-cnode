webpackHotUpdate(0,{

/***/ 841:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(799);
	
	var message = function message() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };
	    var action = arguments[1];
	
	    var count = state.count;
	    switch (action.type) {
	        case _actions.TODO_LIST:
	            return { count: count + 1 };
	        default:
	            return state;
	    }
	}; /**
	    * Created by Administrator on 2017/2/22.
	    */
	exports.default = message;

/***/ }

})
//# sourceMappingURL=0.9c2d5eb67f6bc8fcf7c2.hot-update.js.map