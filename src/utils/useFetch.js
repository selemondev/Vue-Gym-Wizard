export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '1750abdb2cmshd17289e6b27b806p1d2308jsncd5b6d529efc',
    },
  };


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const useFetch = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}