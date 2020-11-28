import { CREATE_POST } from '../actions/index.js'

export const postReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, posts: [...state.posts, action.payload] }
		default:
			return state
	}
}