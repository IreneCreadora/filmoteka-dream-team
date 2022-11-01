import axios from 'axios';
import genresList from './genres-list';
import { refs } from '../refs';
import { KEY_API } from './api-params';
import { IMAGE_URL } from './api-params';
import { getGenres } from './get-genres';
import pagination from '../pagination';

const TRENDING_PATH = '/trending/movie/day';
let page = 1;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// HTTP - запрос на трендовые фильмы - за день
export async function getTrendingMovies(page) {
  try {
    const { data } = await axios.get(
      `${TRENDING_PATH}?api_key=${KEY_API}&page=${page}`
    );
    pagination(data.page, data.total_pages);
    return data.results;
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
}

// Функция для создания карточки фильма:
export function createMarkup({
  id,
  title,
  poster_path: posterPath,
  genre_ids: genreIds,
  release_date: releaseDate,
  vote_average: voteAverage,
}) {
  // Получаем жанры для рендера
  const genres = getGenres(genresList, genreIds);

  return `<li class="frame" data-id="${id}">
          <img
            data-id="${id}"
            src="${posterPath
      ? IMAGE_URL + posterPath
      : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
    }"
            alt="${title ? title : 'Title coming soon'}"
            class="frame__poster"
            loading="lazy"
          />
          <div class="frame__info">
            <p class="frame__title">${title ? title : 'Title coming soon'}</p>
            <p class="frame__genres">${genres ? genres : '---'}</p>
            <p class="frame__year">${new Date(releaseDate).getFullYear()
      ? new Date(releaseDate).getFullYear()
      : '---'
    }</p>
            <p class="frame__raiting">${voteAverage.toFixed(1) ? voteAverage.toFixed(1) : '---'
    }</p>
          </div>
          </li>`;
}

// Функция, которая вставялет полученные данные на страницу
export async function renderTrendingMovies() {
  let firstPage = 1;
  try {
    const moviesList = await getTrendingMovies(firstPage);

    const markup = [...moviesList].map(createMarkup).join('');

    if (refs.galleryMovies) {
      refs.galleryMovies.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
}

renderTrendingMovies();
