import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const getDiscover = async (page = 1) => {
	const type = '/discover/movie';

	const { data: { results } } = await axios.get(`${API_URL + type}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			page
		}
	});

	return results;
}

const getPopular = async (page = 1) => {
	const type = '/movie/popular';

	const { data: { results } } = await axios.get(`${API_URL + type}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			page
		}
	});

	return results;
}

const getRated = async (page = 1) => {
	const type = '/movie/top_rated';

	const { data: { results } } = await axios.get(`${API_URL + type}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			page
		}
	});

	return results;
}

const getUpcoming = async (page = 1) => {
	const type = '/movie/upcoming';

	const { data: { results } } = await axios.get(`${API_URL + type}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			page
		}
	});

	return results;
}

const getByName = async (searchKey) => {
	const type = '/search/movie';

	const { data: { results } } = await axios.get(`${API_URL + type}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			query: searchKey
		}
	});

	return results;
}

const getWithVideos = async (id) => {
	const { data } = await axios.get(`${API_URL}/movie/${id}`, {
		params: {
			api_key: process.env.REACT_APP_MOVIE_API_KEY,
			append_to_response: 'videos'
		}
	});

	return data;
}

const pageTypeMap = {
	popular: getPopular,
	rated: getRated,
	upcoming: getUpcoming
}

export {
	IMAGE_PATH,
	getDiscover,
	getByName,
	getWithVideos,
	getPopular,
	getRated,
	getUpcoming,
	pageTypeMap
}