export const QUERY_KEY_MOVIES = 'movies';

export const QUERY_KEY_SEARCH = 'search';

/**
 * Can be expanded to include tv shows, actors, etc.
 */
export enum SearchType {
  Movies = 'movies',
}

export const INITIAL_DATA_PAGINATED_RESPONSE = Object.freeze({
  results: [],
  total_results: 0,
  total_pages: 0,
  page: 1,
});
