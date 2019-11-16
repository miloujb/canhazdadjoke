const axios = require("axios");

const getJoke = () => {
  return axios.get("https://icanhazdadjoke.com/").then(response => {
    return response;
  });
};
