import {UserName} from "./UserName/UserName";
import {Contact} from "./Contact/Contact";

export const routes = [
	{
		path: "/",
		element: <UserName/>
	},
	{
		path: "/contact",
		element: <Contact/>
	}
];
