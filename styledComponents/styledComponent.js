import { htmlTagList } from './htmlTags.js'

const generateStyledComponent = (tagList) => {
	let styled = {};
	const tagsSingle = ['hr', 'input', 'img']
	tagList.forEach((tag) => {
		tag in tagsSingle
			? (styled[tag] = (styles) => (content) =>
				`<${tag} style="${styles}" ${content}/>`)
			: (styled[tag] = (styles) => (content) =>
				`<${tag} style="${styles}">${content}</${tag}>`)
	});
	return styled;
};

export const styled = generateStyledComponent(htmlTagList);