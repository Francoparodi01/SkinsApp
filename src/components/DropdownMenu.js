import React from 'react';

const DropdownMenu = ({data}) => {
  return (
    <div className='dropdown-container'>
      <div className='row select-container'>
        <div className='col-md-3 col-sm-4 col-xs-12'>
            <select name='select'>
              <option value selected>Type (Any)</option>
              <option>Rifle</option>
              <option>Knife</option>
              <option>Sniper</option>
              <option>Pistol</option> 
            </select>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12 '>
            <select name='select'>
              <option value selected>Wear (Any)</option>
              <option>Factory New</option>
              <option>Minimal Wear</option>
              <option>Field-Tested</option>
              <option>Well-Worn</option> 
              <option>Battle-Scarred</option> 
            </select>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
