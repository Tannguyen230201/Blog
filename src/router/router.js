import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./privateRouter";
import Login from "../component/login";
import Home from "../component/home";

const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/*  <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/quanlysinhvien"
          element={<PrivateRoute component={TableQLSV} />}
        />
        <Route
          path="/quanlylophoc"
          element={<PrivateRoute component={TableLop} />}
        /> */}
      </Routes>
    </Fragment>
  );
};

export default Router;
