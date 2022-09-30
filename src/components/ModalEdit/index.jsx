import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import jwt_decode from "jwt-decode";
import { UpdateRecipe } from "../config/actions/recipeAction";
import { useDispatch } from "react-redux";

const ModalEdit = ({ children, id, photo, title, ingredients, video }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState(photo);
  function handleUpload(e) {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  const [data, setData] = useState({
    title,
    ingredients,
    user_id: decoded.id,
    liked: 0,
    saved: 0,
    popularity: 0,
    video,
    photo,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateRecipe(data, id, saveImage, setShow));
  };
  return (
    <Fragment>
      <button
        className="btn btn-dark text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Title"
              id={id}
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Ingredients"
              id={id}
              name="ingredients"
              value={data.ingredients}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="video"
              id={id}
              name="video"
              value={data.video}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              id={id}
              name="photo"
              onChange={handleUpload}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" id="button-addon2" title="Register">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalEdit;
