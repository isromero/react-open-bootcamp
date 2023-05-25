import './App.css';
import ComponentA from './components/componentA';

function App() {
	const defaultContact = {
		name: "Britón",
		surname: "Gritón",
		email: "britongriton@britoniano.leak",
		connected: true
	}
  return (
    <div className="App">
		<ComponentA contact={defaultContact}/>
    </div>
  );
}

export default App;
