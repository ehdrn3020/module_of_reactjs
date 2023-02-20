// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore;

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
const initialState = {
    numOfCakes : 10,
    numOfIceCream : 20
}

// (preState, action) => newState
// action creator is reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            console.log({...state});
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream : state.numOfIceCream - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('init state:', store.getState())
const unsubscribe = store.subscribe(()=>console.log('update state:',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()