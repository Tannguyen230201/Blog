import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllArticlesAPI } from "../../../api";
import { BsThreeDots } from "react-icons/bs";
import Loading from "../../../common/loading";
import DeleteArticle from "../deleteArticle";
import GetComments from "../../comment/getComment";
import ChangeTime from "../../../common/changeTime";
import LikeArticles from "../likeArticle";
import { Link } from "react-router-dom";

const GetAllArticle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.articles.isLoading);
  const data = useSelector((state) => state.articles.data);
  useEffect(() => {
    dispatch(GetAllArticlesAPI());
  }, []);
  return (
    <Fragment>
      <div className="container mt-2">
        {isLoading ? (
          <Loading />
        ) : (
          data?.articles?.map((item, index) => {
            return (
              <div
                className="container mb-3 "
                style={{
                  backgroundColor: "#CCFFFF",
                  borderRadius: "3px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                key={"key" + index}
              >
                <div className="row">
                  <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
                    <Link to={`/profile/${item?.author?.username}`}>
                      <img
                        className="img-fluid rounded-circle"
                        src={item.author.image}
                        alt=""
                        width="50"
                        height="50"
                      />
                    </Link>
                  </div>
                  <div
                    className="  col-sm-9 col-md-9 col-7 col-lg-10 pt-1"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="row"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      {item.author.username}
                    </div>
                    <div className="row" style={{ fontSize: "10px" }}>
                      <ChangeTime time={item.createdAt} />
                    </div>
                  </div>
                  <div
                    type="button"
                    className="col-sm-1 col-md-1 col-2 col-lg-1 pt-1 "
                    style={{ textAlign: "right" }}
                  >
                    {item.author.username ===
                    JSON.parse(localStorage.getItem("user"))?.username ? (
                      <DeleteArticle slug={item?.slug} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <hr style={{ opacity: "1", color: "#DDDDDD" }} />
                <Link
                  to={`/article/${item.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="row-12 fs-4"
                    style={{ fontWeight: "600", textAlign: "left" }}
                  >
                    {item.title}
                  </div>
                  {/* <div className="row-12 mb-3" style={{ textAlign: "justify" }}>
                    {item.body}
                  </div>
                  <div className="row-12" style={{ textAlign: "justify" }}>
                    {item.description}
                    <div style={{ fontStyle: "italic" }}>#{item.tagList}</div>
                    <hr style={{ opacity: "1", color: "#DDDDDD" }} />
                  </div> */}
                </Link>
                {/* <div className="row-12 pb-2" style={{ textAlign: "justify" }}>
                  {
                    <LikeArticles
                      slug={item.slug}
                      favorited={item.favorited}
                      favoritesCount={item.favoritesCount}
                    />
                  }
                </div>
                <div className="row-12 pb-2">
                  <GetComments slug={item.slug} />
                </div> */}
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};
export default GetAllArticle;
