import './App.css';
import ComponentA from './components/componentA';
import ContactComponent from './components/contactComponent';

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
		<ContactComponent/>
    </div>
  );
}

export default App;
