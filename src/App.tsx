import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllCardsList from "./pages/AllCardsList";
import { exportJson, parse } from "./utils/parsing";

function App() {
	return <AllCardsList />;
}

export default App;
