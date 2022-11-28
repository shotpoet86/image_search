import axios from 'axios';

//takes argument from user search input and
//delivers to unsplash api as search query
const searchImages = async (term) => {
	//store api get request in response var
	//receive error on initial get request when loading page, otherwise OK 200.
	const response = await axios.get('https://api.unsplash.com/search/photos',
		{
			headers: {
				Authorization: 'Client-ID x--y8k_PgC9QSzzBpdGcoXs_dJ6bqaOBb9imE3kgDYw',
			},
			params: {
				query: term,
			},
		});
	return response.data.results;
};

export default searchImages;
