import axios from "axios"

// url for movie database
const instance = axios.create ({
  baseURL:"https://api.themoviedb.org/3"
});

export default instance;
