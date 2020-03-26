import React from "react";

const Book = ({ book }) => {
	return (
		<div className="book">
			<img
				src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
				alt={book.title}
			/>
			<div className="book-info">
				<h2>{book.title}</h2>
				<p>{book.author_name ? book.author_name[0] : "N/A"}</p>
				<p>{book.first_publish_year}</p>
			</div>
		</div>
	);
};

export default Book;
