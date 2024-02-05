import React from 'react'
import NavTwoCSS from '../styles/NavTwo.module.css'
const NavTwo = () => {
  return (
    <div className={NavTwoCSS.div}>
        <ul className={NavTwoCSS.ul}>
            <li>Hot offers</li>
             <li>Hot offers</li>
              <li>Hot offers</li>
        </ul>
                <select name="help" id="help-select">
  <option value="">Help</option>
  <option value="Automobiles">Automobiles</option>
  <option value="Clothes and wear">Clothes and wear</option>
  <option value="Home interiors">Home interiors</option>
  <option value="Computer and tech">Computer and tech</option>
  <option value="Tools, equipments">Tools, equipments</option>
  <option value="Sports and outdoor">Sports and outdoor</option>
    <option value="Animal and pets">Animal and pets</option>
      <option value="Machinery tools">Machinery tools</option>
        <option value="More category">More category</option>
</select>
    </div>
  )
}

export default NavTwo