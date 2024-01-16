import { Fragment, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./router/router";
import Header from "./component/header";

const App = () => {
  useEffect(() => {
    const tokenExpiration = 3600 * 1000; // 1 giờ
    setTimeout(() => {
      window.location.href = "/login";
      localStorage.removeItem("token");
    }, tokenExpiration);
  }, []);
  const style ={
    zIndex:'100'
  }
  return (
    <Fragment>
      <Header style={style} />
      <div style={{ marginTop: "70px" }}></div>
      <Router />
      <ToastContainer />
    </Fragment>
  );
};
export default App;
