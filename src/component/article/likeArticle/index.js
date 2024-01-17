import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LikeArticleAPI } from "../../../api";

const LikeArticles = (props) => {
  const [like, setLike] = useState(props.favorited);
  const [count, setCount] = useState(props.count);
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(LikeArticleAPI(props.slug)).then((e) => {
      console.log("E", e.payload.article.favorited);
      setLike(e.payload.article.favorited)
    });
  };
  const handleDisLike = () => {};
  return (
    <span>
      {like ? (
        <span>
          <FcLike
            onClick={() => handleDisLike()}
            style={{ fontSize: "25px", marginTop: "-8px" }}
          />
          <span className="mx-2">{props.favoritesCount}</span>
        </span>
      ) : (
        <span>
          <FcLikePlaceholder
            onClick={() => handleLike()}
            style={{ fontSize: "25px", marginTop: "-8px" }}
          />
          <span className="mx-2">{props.favoritesCount}</span>
        </span>
      )}
    </span>
  );
};
export default LikeArticles;
