import './App.css';
import ImageShow from './Components/ImageShow';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import {useState} from 'react';


function App() {
	const [term, setTerm] = useState('user search term will go here');
	return (
		<div className="App">
			<h1>hello from app</h1>
			<ImageList/>
			<ImageShow/>
			<SearchBar handleSubmit={searchResults => setTerm(searchResults)}/>
			<h1>{term}</h1>
		</div>
	);
}

export default App;
