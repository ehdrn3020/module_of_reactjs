const BUY_CAKE = 'BUY_CAKE'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Fisrt redux action'
    }
}

// (preState, action) => newState
