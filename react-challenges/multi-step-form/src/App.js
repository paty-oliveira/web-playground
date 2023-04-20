import './App.css';
import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";
import {LandingPage} from "./LandingPage/LandingPage";

function App() {
	return (
		<div className={"App"}>
			<LandingPage/>
			<UserName/>
			<Contact/>
		</div>
	);
}

export default App;
