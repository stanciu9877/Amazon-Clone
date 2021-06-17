import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-8bc8e.cloudfunctions.net/api", //The API (cloud function) URL
});

export default instance;
// Cloud https://us-central1-clone-8bc8e.cloudfunctions.net/api
// Local http://localhost:5001/clone-8bc8e/us-central1/api
