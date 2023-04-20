import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";
import {LandingPage} from "./LandingPage/LandingPage";

export const routes = [
	{
		path: "/",
		element: <LandingPage/>
	},
	{
		path: "/name",
		element: <UserName/>
	},
	{
		path: "/contact",
		element: <Contact/>
	}
];
