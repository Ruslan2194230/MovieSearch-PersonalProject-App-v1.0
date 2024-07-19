import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3373af60a4ee1fe7510a1a61c11380e1';

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

export const getMovieByQuery = async (query, page) => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    return data;
  } catch (error) {
    console.error('Error fetching movie by query:', error);
  }
};

export const getMovieById = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    // console.log('data', data);
    return data;
  } catch (error) {
    console.error('Error fetching movie by id:', error);
  }
};

export const getCastMovie = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data.cast;
  } catch (error) {
    console.error('Error fetching cast movies:', error);
  }
};
export const getReviewsMovie = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return data.results;
  } catch (error) {
    console.error('Error fetching reviews movie:', error);
  }
};

// ///
// ///
// ///
// //
