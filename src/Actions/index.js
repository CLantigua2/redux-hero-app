export const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED';

export const searchTermChanged = (searchTerm) => {
	return {
		type: 'SEARCH_INPUT_CHANGED',
		payload: { searchTerm }
	};
};
