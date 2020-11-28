
import { CREATE_POST, DELETE_POST, CREATE_TASK} from '../actions/index.js'

import { store } from './store/index.js'

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
			type: CREATE_TASK,
			payload: text
		})
	}
}

const newPost = () => {
	const text = document.getElementById('inputPost').value
	if (text !== '') {
		store.dispatch({
			type: CREATE_POST,
			payload: text
		})
	}
}

document.getElementById("saveTask").addEventListener('click', newTask)
document.getElementById("savePost").addEventListener('click', newPost)

