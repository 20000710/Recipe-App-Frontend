import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ModalCreate from "../../components/ModalCreate";
import ModalEdit from "../../components/ModalEdit";
import ModalDelete from "../../components/ModalDelete";
import { GetAllRecipes } from "../../components/config/actions/recipeAction";
import { useDispatch, useSelector } from "react-redux";

const Recipe = () => {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(GetAllRecipes());
  }, []);
  return (
    <div className="container">
      <h1 className="my-4">Recipe</h1>
      <ModalCreate>Add Recipe</ModalCreate>
      <table className="table table-bordered mt-3">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">Title</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Photo</th>
            <th scope="col">Video</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {recipe.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.ingredients}</td>
              <td>
                <img
                  src={process.env.REACT_APP_API_BACKEND + "/" + item.photo}
                  alt={item.photo}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              </td>
              <td>
                <a target="_blank" rel="noopener noreferrer" href={item.video}>
                  <button className="btn btn-warning">Video</button>
                </a>
              </td>
              <td className="text-center">
                <div className="d-flex">
                  <Link to={`/detail-recipe/${item.id}`}>
                    <button
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Detail
                    </button>
                  </Link>
                  <ModalEdit
                    id={item.id}
                    photo={item.photo}
                    title={item.title}
                    ingredients={item.ingredients}
                    video={item.video}
                  >
                    Edit
                  </ModalEdit>
                </div>
                <div className="mt-3">
                  <ModalDelete id={item.id} name={item.title}>
                    Delete
                  </ModalDelete>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
