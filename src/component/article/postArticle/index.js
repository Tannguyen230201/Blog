import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateArticlesAPI } from "../../../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const PostArticle = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articles.data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token")
  const dulieu = {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: [tag],
    },
  };
  const handleClick = () => {
    dispatch(CreateArticlesAPI(dulieu));
    handleClose()
  };
  return !token ? "" :(
    <div className="container ">
      <div className="row-12 mb-3">
        <Button
          // variant="primary btn btn-info text-white"
          style={{background:"rgb(204, 255, 255)",color:"black",border:"none",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}
          className="w-100 text-start"
          onClick={handleShow}
        >
          <img
            className="img-fluid rounded-circle border border-primary"
            width="40px"
            src={JSON.parse(localStorage.getItem("user"))?.image}
            alt="avatar"
          />
          <span className="mx-3">What's on your mind, {data?.username} ?</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>POST ARTICLES</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="description"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="body"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="tag"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <ToastContainer/> */}
      </div>
    </div>
  );
};
export default PostArticle;
