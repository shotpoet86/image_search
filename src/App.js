import './App.css';
import ImageShow from './Components/ImageShow';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';

function App() {
	return (
		<div className="App">
			<h1>hello from app</h1>
			<ImageList/>
			<ImageShow/>
			<SearchBar/>
		</div>
	);
}

export default App;
