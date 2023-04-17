import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import {TfiMenu} from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'

const ArrowDropdown = ({item, product}) => { 
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("")

  const handleMenuClick = (e) => {
        e.preventDefault()
        setShowMenu(!showMenu);
 };

 const searcher = (e) =>{ 
    setSearch(e.target.value)
    console.log(e.target)
 }

  return (
    <form>
        <div className='opciones-container'>
                <input value={search} onChange={searcher} type='text' placeholder='Search for CSGO Items' size="66" className='input-search-items'></input>
                <button className='opciones-boton' onClick={handleMenuClick}>Advanced options</button>
                <button className='opciones-boton' style={{backgroundColor: 'rgb(127 118 202 / 85%)' }}>
                  <AiOutlineSearch/>
                </button>
                {showMenu && <DropdownMenu />}
        </div>
    </form>
 );
}


export default ArrowDropdown;
