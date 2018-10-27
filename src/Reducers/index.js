import { SEARCH_INPUT_CHANGED } from '../Actions';
import { combineReducers } from 'redux';

import Char from './hero';

const initialState = {
	char: Char,
	searchTerm: ''
};

const charReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_INPUT_CHANGED:
			const { searchTerm } = action.payload;
			return {
				...state,
				searchTerm,
				char: searchTerm
					? Char.filter((char) => char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
					: Char
			};
		default:
			return state;
	}
};

const AppState = combineReducers({
	charReducer
});

export default AppState;
