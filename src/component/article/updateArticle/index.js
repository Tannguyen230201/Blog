import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailArticleAPI, UpdateArticlesAPI } from "../../../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UpdateArticle = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [body, setBody] = useState(props.setBody);
  const [tag, setTag] = useState(props.tag);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const dulieu = {
    slug: props.slug,
    body: {
      article: {
        title: title,
        description: description,
        body: body,
        tagList: [tag],
      },
    },
  };
  const handleClick = () => {
    dispatch(UpdateArticlesAPI(dulieu)).then(
      (e) => dispatch(DetailArticleAPI(props.slug)) && handleClose()
    );
  };
  return (
    <div className="container ">
      <div onClick={handleShow}>Update</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={props.title}
                placeholder="title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
                defaultValue={props.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBody(e.target.value)}
                placeholder="body"
                defaultValue={props.body}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTag(e.target.value)}
                placeholder="tag"
                defaultValue={props.tag}
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
  );
};
export default UpdateArticle;
