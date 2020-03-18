import React from "react";

import Search from "./components/Search";
import BookList from "./components/BookList";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<h1 className="heading">Book Search</h1>
			<Search />
			<BookList />
		</div>
	);
}

export default App;
