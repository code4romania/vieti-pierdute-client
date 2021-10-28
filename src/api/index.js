import axios from "axios";

const BASE_URL = process.env.VUE_APP_API;

const getOne = (path, cb) =>
  axios
    .get(BASE_URL + path)
    .then(({ data }) => {
      cb(null, data[0]);
    })
    .catch(error => cb(error, null));

const getMany = (path, cb) =>
  axios
    .get(BASE_URL + path)
    .then(({ data }) => {
      cb(null, data);
    })
    .catch(error => cb(error, null));

const getPage = (slug, cb) => getOne(`/pages?slug=${slug}`, cb);
const getStories = (cb) => getMany('/stories', cb);

export default {
  getPage,
  getStories
};
