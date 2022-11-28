import './Styles/SearchBar.css';
import {useState} from 'react';


function SearchBar({searchResults}) {

	//manages user input state
	const [term, setTerm] = useState('');

//pass term state from input up to parent App component
	const handleFormSubmit = (e) => {
		e.preventDefault();
		//pass user input results of state "term" up to App component for processing
		searchResults(term);
	};

	return (
		<div className="searchB">
			<form onSubmit={handleFormSubmit}>
				<label>check this out: </label>
				<input placeholder="search pictures here"
				       value={term}
				       onChange={e => {
					       console.log(term);
					       setTerm(e.target.value);
				       }
				       }/>
			</form>
		</div>
	);
}

export default SearchBar;