export const getTracks = () => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        "api-key": "610e993a-72f8-437b-8abb-4511649ed865",
      },
    },
  ).then((res) => res.json());

  
};