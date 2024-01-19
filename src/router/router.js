import { Route, Routes ,Navigate} from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./privateRouter";
import Login from "../component/login";
import Home from "../component/home";
import DetailArticle from "../component/article/detailArticle";
import PersonalPage from "../component/personalPage";



const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        {/* <Route path="/article/:slug" element={<DetailArticle/>} /> */}
        {/* <Route path="/profile/:author" element={<ProfileUser/>} /> */}
        <Route
          path="/article/:slug"
          element={<PrivateRoute component={DetailArticle} />}
        />
          <Route
          path="/profile/:user"
          element={<PrivateRoute component={PersonalPage} />}
        />
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
