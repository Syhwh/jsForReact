import { CREATE_TASK } from '../actions/index.js'

export const taskReducer = (state = { tasks: [] }, action) => {
	switch (action.type) {
		case CREATE_TASK:
			return { ...state, tasks: [...state.tasks, action.payload] }
		default:
			return state
	}
}