import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


const Navbar = () => {

    let[searchVal,setSearchVal]=useState("");

    return ( 
        
        <nav>
            <h1><b>Anime-<span>world</span></b></h1> <br />
            
            <div className="searchPart">
                <input type="search" value={searchVal} placeholder="Search......" 
                        onChange={(e)=>{ setSearchVal(e.target.value)}}  />

                <button><FontAwesomeIcon icon={ faSearch }/></button>
            </div>
            
            <div className="rightCornerNav">

                <Link to="/"> 
                    <FontAwesomeIcon icon={ faHome }/>
                </Link> 

                <Link to="/wishlist">
                    WISHLIST
                </Link> 
            </div>
        </nav>
     ); 
}
 
export default Navbar;