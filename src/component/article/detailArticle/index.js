import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { DetailArticleAPI, GetCommentsAPI } from "../../../api";
import Loading from "../../../common/loading";
import DeleteArticle from "../deleteArticle";
import GetComments from "../../comment/getComment";
import ChangeTime from "../../../common/changeTime";
import LikeArticles from "../likeArticle";
import { useParams } from "react-router-dom";

const DetailArticle = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.detail.isLoading);
  const item = useSelector((state) => state?.detail?.data?.article);
  useEffect(() => {
    dispatch(DetailArticleAPI(slug));
    dispatch(GetCommentsAPI(slug));
  }, []);
  return (
    <Fragment>
      <div className="container mt-2">
        {isLoading ? (
          <Loading />
        ) : (
          <div
            className="container mb-3 "
            style={{
              backgroundColor: "#FFF",
              borderRadius: "3px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="row">
              <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
                {/* <Link to={`/profile/${item.author.username}`}> */}
                <img
                  className="img-fluid rounded-circle"
                  src={item?.author?.image}
                  alt=""
                  width="50"
                  height="50"
                />
                {/* </Link> */}
              </div>
              <div
                className="  col-sm-9 col-md-9 col-7 col-lg-10 pt-1"
                style={{ textAlign: "left" }}
              >
                <div
                  className="row"
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  {item?.author?.username}
                </div>
                <div className="row" style={{ fontSize: "10px" }}>
                  <ChangeTime time={item?.createdAt} />
                </div>
              </div>
              <div
                type="button"
                className="col-sm-1 col-md-1 col-2 col-lg-1 pt-1 "
                style={{ textAlign: "right" }}
              >
                {item?.author.username ===
                JSON.parse(localStorage.getItem("user"))?.username ? (
                  <DeleteArticle
                    slug={item.slug}
                    title={item.title}
                    description={item.description}
                    body={item.body}
                    tag={item.tagList[0]}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr style={{ opacity: "1", color: "#DDDDDD" }} />
            <div
              className="row-12 fs-4"
              style={{ fontWeight: "600", textAlign: "left" }}
            >
              {item?.title}
            </div>
            <div className="row-12 mb-3" style={{ textAlign: "justify" }}>
              {item?.body}
            </div>
            <div className="row-12" style={{ textAlign: "justify" }}>
              {/* {item?.description} */}
              <div style={{ fontStyle: "italic" }}>#{item?.tagList}</div>
              <hr style={{ opacity: "1", color: "#DDDDDD" }} />
            </div>
            <div className="row-12 mt-3" style={{ textAlign: "justify" }}>
              {
                <LikeArticles
                  slug={item?.slug}
                  favorited={item?.favorited}
                  favoritesCount={item?.favoritesCount}
                />
              }
            </div>
            <hr style={{ opacity: "1", color: "#DDDDDD" }} />
            <div className="row-12 pb-2 mt-4">
              <GetComments slug={slug} />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default DetailArticle;
