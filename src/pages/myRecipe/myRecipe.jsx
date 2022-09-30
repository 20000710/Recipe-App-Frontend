import React, { useState } from 'react'
import './myRecipe.css'
// import GaleryImg from '../../components/galeryImage/galeryImg'
import myRecipe1 from '../../asset/img/myrecipe1.png'
import myRecipe2 from '../../asset/img/myrecipe2.png'

const MyRecipe = ({ likedRecipe, savedRecipe }) => {
  const [navigate, setNavigate] = useState("my-recipe")
  console.log('navigate: ', navigate)
  console.log("liked: ", likedRecipe)
  return (
    <div className="card text-center myrecipe-card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link" id="my-recipe" aria-current="true" onClick={() => setNavigate("my-recipe")} href="#my-recipe">My Recipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="saved-recipe" onClick={() => setNavigate("saved-recipe")} href="#saved-recipe">Saved Recipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="liked-recipe" onClick={() => setNavigate("liked-recipe")} href="#liked-recipe">Liked Recipe</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="card-body">
        {navigate === "my-recipe"?
          <div id="my-recipe">
            <img src={myRecipe1} class="img-fluid" alt="recipe 1" width={370} height={250} />
            <img src={myRecipe2} class="img-fluid" alt="recipe 2" width={370} height={250} />
          </div> :
        navigate === "saved-recipe" && savedRecipe !== "you dont have saved recipe" ?
          <div id="saved-recipe">
            <img src={myRecipe2} class="img-fluid" alt="recipe 1" width={370} height={250} />
            <img src={myRecipe1} class="img-fluid" alt="recipe 2" width={370} height={250} />
          </div> :
        navigate === "saved-recipe" && savedRecipe === "you dont have saved recipe" ?
          <div style={{ height: "100px" }}>
            <p>you dont have saved recipe</p>
          </div> :
        navigate === "liked-recipe" && likedRecipe !== "you dont have liked recipe" ?
          <div id="liked-recipe">
            <img src={myRecipe1} class="img-fluid" alt="recipe 1" width={370} height={250} />
            <img src={myRecipe2} class="img-fluid" alt="recipe 2" width={370} height={250} />
          </div> :
        navigate === "liked-recipe" && likedRecipe === "you dont have liked recipe" ?
          <div style={{ height: "100px" }}>
            <p>you dont have liked recipe</p>
          </div> : ""
        }
      </div>
    </div>
  )
}

export default MyRecipe