import { createStore, combineReducers } from '../redux/redux.js'

import { postReducer, taskReducer } from '../reducers/index.js'

const reducer = combineReducers({ taskReducer: taskReducer, postReducer: postReducer })

export const store = createStore(reducer)