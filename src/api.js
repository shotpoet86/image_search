import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/photos',
		{
			headers: {
				Authorization: 'Client-ID x--y8k_PgC9QSzzBpdGcoXs_dJ6bqaOBb9imE3kgDYw',
			},
			params: {
				query: term,
			},
		});
	console.log(response.data.results);
	return response;
};

export default searchImages;
