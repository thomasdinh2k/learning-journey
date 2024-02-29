import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./shared/components/Layout/Menu";
import Header from "./shared/components/Layout/Header";
import User from "./pages/User";

import "../public/css/bootstrap.css";
import "../public/css/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Menu />

			<Routes>
				<Route path="/" element={<User />} />
				<Route path="/posts" element={<Post />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
