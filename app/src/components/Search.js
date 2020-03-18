import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchAction } from "../actions/searchActions";

const Search = ({ fetchAction }) => {
	const [search, setSearch] = useState("");
	const [searchType, setSearchType] = useState("q");

	const handleTypeChange = e => {
		setSearchType(e.target.value);
	};

	const handleChange = e => {
		setSearch(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetchAction(search, searchType);
	};

	return (
		<div className="search">
			<select form="searchForm" value={searchType} onChange={handleTypeChange}>
				<option value="q">General</option>
				<option value="author">Author</option>
				<option value="title">Title</option>
			</select>
			<form onSubmit={handleSubmit} id="searchForm">
				<input
					type="text"
					value={search || ""}
					onChange={handleChange}
					placeholder="Search"
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default connect(null, { fetchAction })(Search);
