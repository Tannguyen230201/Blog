import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikeArticleAPI, UnLikeArticleAPI } from "../../../api";

const LikeArticles = (props) => {
  const [like, setLike] = useState(props.favorited);
  const [count, setCount] = useState(props.favoritesCount);
  const dispatch = useDispatch();
  console.log("check,", props.favorited);
  const handleLike = () => {
    dispatch(LikeArticleAPI(props.slug)).then((e) => {
      setLike(e.payload.article.favorited);
      setCount(count + 1);
    });
  };
  const handleDisLike = () => {
    dispatch(UnLikeArticleAPI(props.slug)).then((e) => {
      setLike(e.payload.article.favorited);
      setCount(count - 1);
    });
  };
  return (
    <span>
      {like ? (
        <span>
          <FcLike
            onClick={() => handleDisLike()}
            style={{ fontSize: "25px", marginTop: "-8px" }}
          />
          <span className="mx-2">{count}</span>
        </span>
      ) : (
        <span>
          <FcLikePlaceholder
            onClick={() => handleLike()}
            style={{ fontSize: "25px", marginTop: "-8px" }}
          />
          <span className="mx-2">{count}</span>
        </span>
      )}
    </span>
  );
};
export default LikeArticles;
