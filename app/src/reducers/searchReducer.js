import {
	FETCHING_BOOKS,
	FETCHING_BOOKS_SUCCESS,
	FETCHING_BOOKS_FAILURE
} from "../actions/searchActions";

const initialState = {
	isLoading: false,
	books: null,
	error: ""
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_BOOKS:
			return {
				...state,
				isLoading: true
			};
		case FETCHING_BOOKS_SUCCESS:
			return {
				...state,
				isLoading: false,
				books: action.payload,
				error: ""
			};
		case FETCHING_BOOKS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};
