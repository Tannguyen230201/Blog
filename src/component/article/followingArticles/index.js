import { Fragment, useEffect } from "react";
import { ArticlesFollowingAPI } from "../../../api";
import Loading from "../../../common/loading";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../../common/page";

const FollowingArticles = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.articles.isLoading);
  const data = useSelector((state) => state.articles.data);
  useEffect(()=>{
    dispatch(ArticlesFollowingAPI(props?.user));
  },[])
  return (
    <Fragment>
      <div className="container mt-2">
        {isLoading ? (
          <Loading />
        ) : (
          data?.articles?.map((item, index) => {
            return (
              <Page
                index={index}
                userName={item?.author?.username}
                image={item?.author?.image}
                time={item?.createdAt}
                slug={item?.slug}
                title={item?.title}
                description={item?.description}
              />
            );
          })
        )}
      </div>
    </Fragment>
  );
};
export default FollowingArticles;
