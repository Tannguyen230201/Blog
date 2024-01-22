import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PersonalPageAPI, MyArticlesAPI } from "../../api";
import Loading from "../../common/loading";
import Follow from "../follow";
import MyArticles from "../myArticles";

function PersonalPage() {
  const data = useSelector((e) => e.personalPage.data.profile);
  const loading = useSelector((e) => e.personalPage.isLoading);
  const dispatch = useDispatch();
  const { user } = useParams();
  useEffect((e) => {
    dispatch(PersonalPageAPI(user));
    dispatch(MyArticlesAPI(user));
  }, [user]);
  return loading ? (
    <Loading />
  ) : (
    <div className="container">
      <img
        className="img-fluid w-100"
        style={{ height: "250px", opacity: "0.5" }}
        src="https://wallpaperaccess.com/full/3116814.jpg"
        alt=""
      />
      <div className="mt-3 row" style={{ position: "relative", top: "-70px" }}>
        <div className="col-12 col-lg-3 col-md-4 col-xl-3 col-xxl-2">
          <img
            className="img-fluid rounded-circle"
            style={{ width: "200px", height: "200px" }}
            src={data?.image}
            alt="avatar"
          />
        </div>
        <div className="col-12 col-lg-7 col-md-5 col-xl-7 col-xxl-8  mt-5">
          <span className="fs-1 fw-bold">{data?.username}</span>
          <br />
          <span className="fs-6 fw-bold">{data?.bio}</span>
          <br />
          <span>
            <Follow isFollow={data?.following} user={data?.username} />
          </span>
        </div>
      </div>
      <div>
        <MyArticles user={data?.username} />
      </div>
    </div>
  );
}

export default PersonalPage;
