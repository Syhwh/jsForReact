
import {styled} from './styledComponent.js'

function component(strings, ...dynamicValues) {
	return (props) => {
		let newContent = strings.slice()
		dynamicValues.forEach((value, index) => {
			newContent[index] += props[value]
		})
		return newContent.join('')
	}
}

const render = (component, container) => {
	container.innerHTML = component
}



const TitleStyled = styled.header`
color:green;
font-size: 16px;
`


const props = { message: 'My message' }

const user = component`-${'message'}-`(props)


render(TitleStyled(user), window.container)