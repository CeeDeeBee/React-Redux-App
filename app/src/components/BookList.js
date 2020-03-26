import React from "react";
import { connect } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

import Book from "./Book";

const BookList = ({ books, isLoading, error }) => {
	return (
		<div className="book-list">
			{!books && !error && !isLoading && (
				<h2>Enter a title in the search bar above to get started!</h2>
			)}
			{books &&
				!isLoading &&
				!error &&
				books.map(book => <Book key={book.key} book={book} />)}
			{isLoading && <BeatLoader size={30} color={"#000000"} />}
			{error && !isLoading && <h2>Error: {error}</h2>}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		books: state.books,
		isLoading: state.isLoading,
		error: state.error
	};
};

export default connect(mapStateToProps, {})(BookList);
