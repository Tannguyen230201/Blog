import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { DeleteArticlesAPI } from "../../../api";
import { useNavigate } from "react-router";
import UpdateArticle from "../updateArticle";

const DeleteArticle = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(DeleteArticlesAPI(props.slug)).then((e) => {
      navigate("/home");
    });
  };
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="btn_delete"
        variant="success"
        id="dropdown-basic"
        caret={false}
      >
        <BsThreeDots style={{ color: "black" }} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          style={{ textAlign: "center" }}
          onClick={handleClick}
        >
          Delete
        </Dropdown.Item>
        <Dropdown.Item
          style={{ textAlign: "center" }}
          // onClick={handleClick}
        >
          <UpdateArticle slug={props.slug} title ={props.title} description={props.description} body={props.body} tag ={props.tag} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DeleteArticle;
