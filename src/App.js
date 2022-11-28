import './App.css';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import {useState} from 'react';
import searchImages from './api';


function App() {

	const [images, setImages] = useState([]);
	//takes in user input from SearchBar for processing within App component
	const searchResults = async (searchBarTermResults) => {
		//pass user input term from SearchBar component
		// as argument to function for unsplash api call
		const result = await searchImages(searchBarTermResults);
		setImages(result);
	};

	return (
		<div className="App">
			<h1>hello from app</h1>
			<SearchBar searchResults={searchResults}/>
			<br/>
			<ImageList appImageResults={images}/>
			{/*takes in search term from child SearchBar component
			for use in App component */}

		</div>
	);
}

export default App;
