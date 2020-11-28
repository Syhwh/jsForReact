import { CREATE_TASK } from '../actions/index.js'

export const taskReducer = (state = { tasks: [] }, {type, payload}) => {
	switch (type) {
		case CREATE_TASK:
			return { ...state, tasks: [...state.tasks, payload] }
		default:
			return state
	}
}