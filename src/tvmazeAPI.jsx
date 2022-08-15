import _ from 'lodash';
import axios from 'axios';

const baseUrl = 'https://api.tvmaze.com';

export const getSearchResults = _.memoize(async title => {
  const searchParam = title.replaceAll(' ', '+');
  const res = await axios.get(`${baseUrl}/search/shows?q=${searchParam}`);
  if (res.status !== 200) return [];
  return res;
});

export const getShowDetails = async id => {
  const res = await axios.get(`${baseUrl}/shows/${id}`);
  return res.data;
};

export const getEpisodeDetails = async id => {
  const res = await axios.get(`${baseUrl}/shows/${id}/episodes`);
  return res.data;
};

export const getShowImages = async id => {
  const res = await axios.get(`${baseUrl}/shows/${id}/images`);
  return res.data;
};
