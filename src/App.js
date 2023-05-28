import './App.css';
import ComponentA from './components/componentA';
import ContactComponent from './components/contactComponent';
import Square from './components/square';

function App() {
	const defaultContact = {
		name: "Britón",
		surname: "Gritón",
		email: "britongriton@britoniano.leak",
		connected: true
	}
  return (
    <div className="App">
		{/* <ComponentA contact={defaultContact}/> */}
		{/* <ContactComponent/> */}
		<Square />
    </div>
  );
}

export default App;
