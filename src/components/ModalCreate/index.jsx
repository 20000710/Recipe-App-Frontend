import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { CreateRecipe } from "../config/actions/recipeAction";

const ModalCreate = ({ children }) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    user_id: decoded.id,
    liked: 0,
    saved: 0,
    popularity: 0,
    video: "",
    photo: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateRecipe(data, saveImage, setShow));
  };
  return (
    <Fragment>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label htmlFor="photo" className="mt-3">
              Photo
            </label>
            <input
              className="form-control mt-1"
              type="file"
              id="photo"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
            <label htmlFor="title" className="mt-3">
              Title
            </label>
            <input
              className="form-control mt-1"
              type="text"
              id="title"
              placeholder="Title"
              name="title"
              // value={data.name}
              onChange={handleChange}
            />
            <label htmlFor="ingredients" className="mt-3">
              Ingredients
            </label>
            <input
              className="form-control mt-1"
              type="text"
              id="ingredients"
              placeholder="Ingredients"
              name="ingredients"
              // value={data.stock}
              onChange={handleChange}
            />
            <label htmlFor="video" className="mt-3">
              Video
            </label>
            <input
              className="form-control mt-1"
              type="text"
              id="video"
              placeholder="Video"
              name="video"
              // value={data.price}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" id="button-addon2" title="Register">
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalCreate;
