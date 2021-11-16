const BASE_URL = "https://api.spotify.com/v1"

// uses Spotify's Search API to search tracks by track name and artist
const getArtist1Id = async (http, { artist1 }) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/search?q=artist:${artist1}&type=artist`
  };
  
  return http(config)
    .then((res) => res.data);
}

const getArtist2Id = async (http, { artist2 }) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/search?q=artist:${artist2}&type=artist`
  };
  
  return http(config)
    .then((res) => res.data);
}

const getArtist3Id = async (http, { artist3 }) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/search?q=artist:${artist3}&type=artist`
  };
  
  return http(config)
    .then((res) => res.data);
}

/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http, { artist1Id, artist2Id, artist3Id }) => {  
  const config = {
    method: 'get',
    url: `${BASE_URL}/recommendations?seed_artists=${artist1Id},${artist2Id},${artist3Id}`,
  };

  return http(config)
    .then((res) => res.data);
}

module.exports = { getArtist1Id,getArtist2Id,getArtist3Id, getRecommendations }