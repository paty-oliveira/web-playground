import Accordion from './components/Accordion';
import './App.css';

export default function App() {

	const data = [
		{
			title: "HTML",
			description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
		},
		{
			title: "CSS",
			description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
		},
		{
			title: "JavaScript",
			description: " JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
		}
	]

	return (
		<>
			{data.map((item, index) => (<Accordion key={index} title={item.title} description={item.description}/>))}
		</>
	)
}
