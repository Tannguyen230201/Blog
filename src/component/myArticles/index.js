import { Fragment, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MyArticlesAPI, FavoriteArticlesAPI } from "../../api";
import Loading from "../../common/loading";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../common/page";

const MyArticles = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.articles.isLoading);
  const data = useSelector((state) => state.articles.data);
  const handleTabSelect = (selectedTab) => {
    if (selectedTab === "tab1") {
      dispatch(MyArticlesAPI(props?.user));
    } else {
      dispatch(FavoriteArticlesAPI(props?.user));
    }
  };
  return (
    <Fragment>
      <Tabs
        defaultActiveKey="tab1"
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
      >
        <Tab eventKey="tab1" title="ARTICLES">
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
        </Tab>
        <Tab eventKey="profile" title="FAVORITE ARTICLES">
          <div className="container mt-2">
            {isLoading ? (
              <Loading />
            ) : data?.articles?.length == 0 ? (
              <div style={{ textAlign: "center" }}>No Articles</div>
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
        </Tab>
      </Tabs>
    </Fragment>
  );
};
export default MyArticles;
