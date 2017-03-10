/**
 * Created by Administrator on 2017/2/22.
 */
import {
    TODO_LIST
} from "../actions/actions"

const message = (state= {count: 0}, action) => {
    const count = state.count;
    switch (action.type) {
        case TODO_LIST:
            return {count: count + 1};
        default:
            return state
    }

};
export  default message