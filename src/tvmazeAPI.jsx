import _ from 'lodash';
import axios from 'axios';

export const requestSearchShows = _.memoize(async title => {
  const baseUrl = 'https://api.tvmaze.com';
  const searchParam = title.replaceAll(' ', '+');
  const res = await axios.get(`${baseUrl}/search/shows?q=${searchParam}`);
  if (res.status !== 200) return [];
  return res;
});
