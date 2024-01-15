import axios from "axios";

const instance = axios.create({
  baseURL: "https://node-express-conduit.appspot.com",
  //   baseURL:"https://aspnetcorerealworld.okami101.io",
  //   baseURL: "https://api.realworld.io"
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("token"),
  //   },
});
instance.interceptors.request.use(
  function (response) {
    response.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    return response; 
  },
  function (error) {
    console.error("check error: " + error);
    return Promise.reject(error);
  }
);
export default instance;
