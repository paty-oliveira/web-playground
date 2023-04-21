import './App.css';
import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";
import {LandingPage} from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className={"App"}>
			<Routes>
				<Route path={"/"} element={<LandingPage/>}/>
				<Route path={"/name"} element={<UserName/>}/>
				<Route path={"/contact"} element={<Contact/>}/>
			</Routes>
		</div>
	);
}

export default App;
