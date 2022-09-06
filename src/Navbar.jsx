import React from 'react';
import { useContext } from 'react';
import {FaShoppingBasket} from 'react-icons/fa';
import { AppContext } from './ContextFile';
import { AppProvider } from './ContextFile';

const Navbar = () => {
  const{totalItems}=useContext(AppContext);

  return (
         <nav>
    <div className="nav-center">
<h3>Shopping Mobile</h3>
<div className="nav-container">
<FaShoppingBasket className='icon'/>
<div className="quantity-container">
         <p style={{marginBottom:"0"}}>{totalItems}</p>
</div>
</div>
    </div>
    </nav>
  )
}

export default Navbar