import React from 'react'
import SearchCSS from '../styles/Search.module.css';
import { useEffect , useState } from 'react';
import {fetchCategories} from '../data/categories';

const Search = () => {

   const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  // Define the fetchCategories function
  const getCategories = async () => {
    try {
      // Use fetchCategories or fetchData here based on your actual function
      const data = await fetchCategories(); // Assuming fetchData is defined somewhere
      // Use the data as needed
      setSearchTerm(data.title)
      console.log(data, 'this is the data');
    } catch (error) {
      // Handle the error
      console.error('Error fetching categories:', error);
    }
  };

  // Call the function when needed
  getCategories();
}, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className={ SearchCSS.divWrapper}>
        <input type="search"  placeholder='search' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
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