import { Link } from "react-router-dom";
import ChangeTime from "../changeTime";
const Page = (props) => {
  return (
    <div
      className="container mb-3 pb-3 "
      style={{
        backgroundColor: "#FFF",
        borderRadius: "3px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      key={"key" + props.index}
    >
      <div className="row">
        <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
          <Link to={`/profile/${props.userName}`}>
            <img
              className="img-fluid rounded-circle"
              src={props.image}
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
          <div className="row" style={{ fontSize: "20px", fontWeight: "700" }}>
            {props.userName}
          </div>
          <div className="row" style={{ fontSize: "10px" }}>
            <ChangeTime time={props.time} />
          </div>
        </div>
      </div>
      <hr style={{ opacity: "1", color: "#DDDDDD" }} />
      <div>
        <Link
          to={`/article/${props?.slug}`}
          style={{ textDecoration: "none", color: "#333" }}
        >
          <div
            className="row-12 fs-4"
            style={{ fontWeight: "600", textAlign: "left" }}
          >
            {props.title}
          </div>
          <div className="row-12 mb-3" style={{ textAlign: "justify" }}>
            {props.description}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Page;
