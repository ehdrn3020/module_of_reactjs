const redux = require('redux')
const createStore = redux.createStore

// state
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// action
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUsersSuccess = () => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = () => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const store = createStore(reducer)
store