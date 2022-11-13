import { shortFilmDuration } from './constants';

export const searchStringFilter = (movies, searchString) => {
  return movies.filter(item => item.nameRU.toLowerCase().includes(searchString.toLowerCase()));
}

export const filterShortMovies = filterMovies => {
  return filterMovies.filter(item => item.duration < shortFilmDuration);
};
