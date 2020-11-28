export const createStore = (reducer, initialState) => {
	let state = initialState
	const subscribers = []
	const getState = () => { return { ...state } }

	const dispatch = (action) => {
		const newState = reducer(state, action)
			state = newState
			subscribers.forEach(listener => listener())

		return action
	}
	const subscribe = (listener) => {
		subscribers.push(listener)
		return function unsubscribe() {
			return subscribers.splice(subscribers.indexOf(listener), 1)
		}
	}
	return {
		getState,
		dispatch,
		subscribe
	}
}

export const combineReducers = (reducers) => {
	return (state = {}, action) => {
		Object.keys(reducers).forEach(reducerKey => {
			const reducerFunction = reducers[reducerKey]
			const sliceState = state[reducerKey]
			state[reducerKey] = reducerFunction(sliceState, action)
		})
		return state
	}
}