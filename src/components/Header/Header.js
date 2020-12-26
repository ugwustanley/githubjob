import React from 'react'
import Search from '../Search/Search'
import './Header.scss'
 const Header = () => {
    return (
        <div className="header">
            
             <div className="search__container">
                  <Search />
             </div>         
        </div>
    )
}

export default Header;
