import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
export const App = function () {
	return (
		<div>
			<Header />
			<Note />
			<Footer />
		</div>
	);
};
