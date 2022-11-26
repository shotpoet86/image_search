import './Styles/SearchBar.css';


function SearchBar({handleSubmit}) {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleSubmit('hello from searchbar child component using function');
	};
	return (
		<div className="searchB">
			<form onSubmit={handleFormSubmit}>
				<label>check this out: </label>
				<input/>
			</form>
		</div>
	);
}

export default SearchBar;