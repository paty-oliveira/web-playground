import './App.css';
import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";
import {LandingPage} from "./LandingPage/LandingPage";
import { Route, Routes, useLocation } from "react-router-dom";

export const LocationDisplay = () => {
	const location = useLocation();

	return <div data-testid="location-display">{location.pathname}</div>;
}

function App() {
	return (
		<div className={"App"}>
			<Routes>
				<Route path={"/"} element={<LandingPage/>}/>
				<Route path={"/name"} element={<UserName/>}/>
				<Route path={"/contact"} element={<Contact/>}/>
			</Routes>
			<LocationDisplay/>
		</div>
	);
}

export default App;
