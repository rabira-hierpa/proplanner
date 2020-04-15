export const createAProject = project => {
	return (dispatch, getState) => {
		// make async call to database
		dispatch({ type: 'CREATE_PROJECT', project });
	};

	// The normal redux method
	// return {
	// 	type: 'ADD_PROJECT',
	// 	project: project
	// };
};
