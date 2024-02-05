import React from 'react'
import SearchCSS from '../styles/Search.module.css';

const Search = () => {
  return (
    <div className={ SearchCSS.divWrapper}>
        <input type="search"  placeholder='search'/>
        <select name="store" id="store-select">
  <option value="">All category</option>
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
<button>Search</button>
    </div>
  )
}

export default Search