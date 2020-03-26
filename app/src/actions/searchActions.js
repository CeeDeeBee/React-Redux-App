import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const FETCHING_BOOKS_SUCCESS = "FETCHING_BOOKS_SUCCESS";
export const FETCHING_BOOKS_FAILURE = "FETCHING_BOOKS_FAILURE";

export const fetchAction = (search, searchType) => dispatch => {
	dispatch({ type: FETCHING_BOOKS });
	axios
		.get(
			`https://openlibrary.org/search.json?${searchType}=${search
				.split(" ")
				.join("+")}`
		)
		.then(res =>
			dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data.docs })
		)
		.catch(err =>
			dispatch({
				type: FETCHING_BOOKS_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};
