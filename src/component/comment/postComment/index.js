import { GrSend } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetCommentsAPI, PostCommentAPI } from "../../../api";

const PostComment = (props) => {
  const data = JSON.parse(localStorage.getItem("user"));
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const body = {
    slug: props.slug,
    body: {
      comment: {
        body: comment,
      },
    },
  };
  const handleComment = () => {
    dispatch(PostCommentAPI(body));
    setComment("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(PostCommentAPI(body));
      setComment("");
    }
  };
  return !token ? (
    <div style={{ textAlign: "center" }}>
      Please <Link to="/login">Sign In</Link> to comment.{" "}
    </div>
  ) : (
    <div className="container">
      <div className="row mt-2">
        <div className="d-none d-sm-block col-sm-2 col-md-1 col-lg-1">
          <img
            className=" float-end img-fluid rounded-circle border"
            width="38"
            src={data.image}
            alt=""
          />
        </div>
        <div className="col-10 col-sm-8 col-md-10 col-lg-10">
          <input
            type="text"
            className="w-100 form-control"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="comments..."
            autoFocus
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </div>
        <div className="col-2 col-sm-2 col-md-1 col-lg-1">
          <button
            style={{
              border: "none",
              background: "#FFF",
              color: "#333",
            }}
            disabled={comment ? false : true}
          >
            <GrSend className="fs-2" onClick={handleComment} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostComment;
