import { cardsReducer } from "./reducers.js"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    cards: cardsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))