import axios from "axios";

export const options = {
  method: "GET",
  url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
  params: { lon: "38.5", lat: "-78.5" },
  headers: {
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    "x-rapidapi-key": "f4c976f58dmsh8c43d11b7303bd3p1c3e00jsn31d083ab837a",
  },
};

axios
  .request(options)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
