import axios from "axios";

const BASE_URL = process.env.VUE_APP_API;

const get = (path, cb) =>
  axios
    .get(BASE_URL + path)
    .then(({ data }) => {
      cb(null, data[0]);
    })
    .catch(error => cb(error, null));

const post = path => axios.post(BASE_URL + path);

export default {
  get,
  post
};
