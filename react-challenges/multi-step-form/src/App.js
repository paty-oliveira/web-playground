import './App.css';
import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";
import {LandingPage} from "./LandingPage/LandingPage";
import {Birthday} from "./Birthday/Birthday";
import { Route, Routes } from "react-router-dom";
import {Password} from "./Password/Password";
import {AppProvider} from "./state";

function App() {
	return (
		<div className={"App"}>
			<AppProvider>
				<Routes>
					<Route path={"/"} element={<LandingPage/>}/>
					<Route path={"/name"} element={<UserName/>}/>
					<Route path={"/contact"} element={<Contact/>}/>
					<Route path={"/birthday"} element={<Birthday/>}/>
					<Route path={"/password"} element={<Password/>}/>
				</Routes>
			</AppProvider>
		</div>
	);
}

export default App;
