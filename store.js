import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './rootreducer'
import { history } from "./history";

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]
const store = createStore(
    connectRouter(history)(rootReducer),
    initialState
)

export default store