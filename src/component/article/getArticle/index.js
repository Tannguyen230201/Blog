import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllArticlesAPI } from "../../../api";
import { BsThreeDots } from "react-icons/bs";
import Loading from "../../../common/loading";
import DeleteArticle from "../deleteArticle";
import GetComments from "../../comment/getComment";
import ChangeTime from "../../../common/changeTime";
import LikeArticles from "../likeArticle";
import ReactPaginate from "react-paginate";
import Page from "../../../common/page";

const GetAllArticle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.articles.isLoading);
  const data = useSelector((state) => state.articles.data);
  useEffect(() => {
    dispatch(GetAllArticlesAPI());
    console.log(data);
  }, []);
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
        {/* <ReactPaginate
          nextLabel=">"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={50}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        /> */}
      </div>
    </Fragment>
  );
};
export default GetAllArticle;
