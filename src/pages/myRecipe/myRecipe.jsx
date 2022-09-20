import React from 'react'
import GaleryImg from '../../components/galeryImage/galeryImg'
import myRecipe1 from '../../asset/img/myrecipe1.png'
import myRecipe2 from '../../asset/img/myrecipe2.png'

const myRecipe = () => {
  return (
    <div className="d-flex container flex-row" id="my-recipe" style={{ marginBottom: '61px' }}>
        <GaleryImg img={myRecipe1} caption="Bomb Chicken" name="galery-img1"/>
        <GaleryImg img={myRecipe2} caption="Banana Puncake" name="galery-img2" />
    </div>
  )
}

export default myRecipe