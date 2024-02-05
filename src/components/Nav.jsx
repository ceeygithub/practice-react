import React from 'react'
import NavCSS from '../styles/nav.module.css'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Nav = () => {
  return (
    <>
    <ul className={NavCSS.ul}>
  <li>
        <IoPerson />
       <h5 className={NavCSS.h5}>Profile</h5>
        </li>
          <li>
     <MdChat />
       <h5 className={NavCSS.h5}>Message</h5>
        </li>
        <li>
<FaHeart />
       <h5 className={NavCSS.h5}>Orders</h5>
        </li>
       <li>
         <RiShoppingCart2Fill />
       <h5 className={NavCSS.h5}>My Cart</h5>
        </li>
    </ul>
    </>
  )
}

export default Nav