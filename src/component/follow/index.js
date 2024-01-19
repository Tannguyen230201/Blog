import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FollowAPI, UnFollowAPI } from "../../api";

const Follow = (props) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")).username;
  const [follow, setFollow] = useState(props.isFollow);
  const handleFollow = () => {
    dispatch(FollowAPI(props.user)).then((e) => {
      setFollow(!follow);
    });
  };
  const handleUnFollow = () => {
    dispatch(UnFollowAPI(props.user)).then((e) => {
      setFollow(!follow);
    });
  };
  return user === props.user ? "" : (
    <Fragment>
      {follow ? (
        <Button onClick={handleUnFollow}>Un Follow</Button>
      ) : (
        <Button
          style={{ backgroundColor: "#fff", color: "#333" }}
          onClick={handleFollow}
        >
          Follow
        </Button>
      )}
    </Fragment>
  );
};
export default Follow;
