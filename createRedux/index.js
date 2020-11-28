import { createStore, combineReducers } from './redux.js'

const taskReducer = (state = { tasks: [] }, action) => {
	switch (action.type) {
		case 'addTodo':
			return { ...state, tasks: [...state.tasks, action.payload] }
		default:
			return state
	}
}

const postReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case 'addPost':
			return { ...state, posts: [...state.posts, action.payload] }
		default:
			return state
	}
}

const reducer = combineReducers({ taskReducer: taskReducer, postReducer: postReducer })

const store = createStore(reducer)

store.subscribe(() => {
	console.log('state in subscribe', store.getState())
	const { taskReducer } = store.getState()
	const { tasks } = taskReducer
	const taskArray = tasks.map(task => {
		return `<li>${task}</li>`
	})

	taskArray.length >= 1 ?
		document.getElementById('tasks').innerHTML = `<ul>${taskArray}</ul>` :
		document.getElementById('tasks').innerHTML = ``
})

store.subscribe(() => {
	const { postReducer } = store.getState()
	const { posts } = postReducer
	const postArray = posts && posts.map(post => {
		return `<li>${post}</li>`
	})

	postArray.length >= 1 ?
		document.getElementById('posts').innerHTML = `<ul>${postArray}</ul>` :
		document.getElementById('posts').innerHTML = ``
})

const newTask = () => {
	const text = document.getElementById('inputTask').value
	if (text !== '') {
		store.dispatch({
			type: 'addTodo',
			payload: text
		})
	}
}

const newPost = () => {
	const text = document.getElementById('inputPost').value
	if (text !== '') {
		store.dispatch({
			type: 'addPost',
			payload: text
		})
	}
}

document.getElementById("saveTask").addEventListener('click', newTask)
document.getElementById("savePost").addEventListener('click', newPost)

