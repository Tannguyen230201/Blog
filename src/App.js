import { Fragment, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./router/router";

const App = () => {
  useEffect(() => {
    const tokenExpiration = 3600 * 1000; // 1 giờ
    console.log("TOKEN","Bearer" + localStorage.getItem('token'));
    setTimeout(() => {
      window.location.href = "/login";
      localStorage.removeItem("token");
    }, tokenExpiration);
  }, []);
  return (
    <Fragment>
      <Router />
      <ToastContainer />
    </Fragment>
  );
};
export default App;
