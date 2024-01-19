import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCommentsAPI } from "../../../api";
import PostComment from "../postComment";
import Loading from "../../../common/loading";
import ChangeTime from "../../../common/changeTime";
import DeleteComment from "../deleteComment";

const GetComments = (props) => {
  const dataComment = useSelector((e) => e.comments.data.comments);
  const loading = useSelector((e) => e.comments.isLoading);
  return (
    <div>
      <div style={{ textAlign: "justify", marginTop: "-10px" }}>
        <PostComment slug={props.slug} />
      </div>
      {loading ? (
        <Loading />
      ) : dataComment?.length === 0 ? (
        <div style={{ textAlign: "justify" }}>
          <div className="row mt-2">
            <span className="text-center">This post has no comment</span>
          </div>
        </div>
      ) : (
        <div
          style={{
            textAlign: "justify",
            minHeight: "100px",
            height: "auto",
            overflow: "auto",
            scrollbar: "none",
          }}
        >
          {dataComment?.map((item, index) => {
            return (
              <div
                className="row rounded col-sm-10 mb-2 mt-2"
                style={{ background: "#FFF", margin: "auto" }}
                key={item.id}
              >
                <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
                  <img
                    className="img-fluid rounded-circle"
                    width="40"
                    src={item.author.image}
                    alt=""
                  />
                </div>
                <div className="col-sm-9 col-md-9 col-7 col-lg-10 pt-1">
                  <div className="row fs-5 fw-bold">{item.author.username}</div>
                  <div className="row">{item.body}</div>
                  <div className="row" style={{ fontSize: "10px" }}>
                    <ChangeTime time={item.createdAt} />
                  </div>
                </div>
                <div className="col-sm-1 col-md-1 col-7 col-lg-1 pt-1">
                  <DeleteComment author={item.author.username} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default GetComments;
