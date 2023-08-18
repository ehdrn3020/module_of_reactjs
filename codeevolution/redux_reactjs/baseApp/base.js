import { createStore, combineReducers } from 'redux';
/*
require 이용시 해당 코드로 import 대체 
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
*/

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Fisrt redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Fisrt redux action'
    }
}

// state
const initialCakeState = {
    numOfCakes : 10
}
const initialIceCreamState = {
    numOfIceCream : 10
}

// (preState, action) => newState
// action creator is reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream : state.numOfIceCream - 1
        }
        default: return state
    }
}

const rootReducers = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducers)

console.log('init state:', store.getState())
const unsubscribe = store.subscribe(()=>console.log('update state:',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()