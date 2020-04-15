const initState = {
	projects: [
		{
			id: '1',
			title: 'Help me find a cat',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut magnam placeat assumenda quo incidunt molestias deserunt labore esse beatae!'
		},
		{
			id: '2',
			title: 'Design a mobile app',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut magnam placeat assumenda quo incidunt molestias deserunt labore esse beatae!'
		},
		{
			id: '3',
			title: 'Personal protfolio',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut magnam placeat assumenda quo incidunt molestias deserunt labore esse beatae!'
		}
	]
};
const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('Project created', action.project);
			break;

		default:
			break;
	}
	return state;
};
export default projectReducer;
