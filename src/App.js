import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";

import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";
import Book from "./pages/book";

function App() {
	

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
				<Route path="/book" element={<Book/>}/>
			</Routes>
		</div>
	);
}

export default App;
