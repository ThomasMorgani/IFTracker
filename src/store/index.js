import { combineReducers, createStore } from 'redux'
import meals from './meal'
const reducer = combineReducers({ meals })
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store