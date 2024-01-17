import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCommentsAPI } from "../../../api";
import PostComment from "../postComment";
import Loading from "../../../common/loading";
import ChangeTime from "../../../common/changeTime";

const GetComments = (props) => {
  const dispatch = useDispatch();
//   const [dataComment, setDataComment] = useState([]);
  const [noComment, setNoComment] = useState(false);
  const  dataComment =  useSelector(e=>e.comments.data.comments)
  const handleGetComment = () => {
    dispatch(GetCommentsAPI(props.slug)).then((e) => {
      console.log("XX", e.payload.comments);
    //   setDataComment(e.payload.comments);
      if (e.payload.comments.length === 0) {
        setNoComment(true);
      }
    });
    console.log(dataComment);
    console.log(dataComment == null);
  };
  return (
    <div>
      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={handleGetComment} className="btn_delete">
            Comments
          </Accordion.Header>
          <Accordion.Body style={{ textAlign: "justify", marginTop: "-10px" }}>
            <PostComment slug={props.slug}/>
          </Accordion.Body>
          {noComment ? (
            <Accordion.Body
              style={{ textAlign: "justify", marginTop: "-10px" }}
            >
              <div className="row">
                <span className="text-center">This post has no comment</span>
              </div>
            </Accordion.Body>
          ) : (
            <Accordion.Body style={{ textAlign: "justify" }}>
              {dataComment?.map((item, index) => {
                return (
                  <div className="row rounded  mb-2" style={{background:"rgb(204, 255, 255)"}} key={item.id}>
                    <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
                      <img
                        className="img-fluid rounded-circle"
                        width="40"
                        src={item.author.image}
                        alt=""
                      />
                    </div>
                    <div className="col-sm-9 col-md-9 col-7 col-lg-10 pt-1">
                      <div className="row fs-5 fw-bold">
                        {item.author.username}
                      </div>
                      <div className="row">{item.body}</div>
                      <div className="row" style={{ fontSize: "10px" }}>
                        <ChangeTime time={item.createdAt}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Accordion.Body>
          )}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default GetComments;
