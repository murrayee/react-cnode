import { combineReducers } from 'redux'
import message from './message'
import homePage from './HomePage'
import article from './Article'

const reducers = combineReducers({message,homePage,article});
export default reducers