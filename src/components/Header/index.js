import React from 'react'
import './styles.scss'
import logo from './../../assets/graphics/logo.png'

const Header = (props) => {
   return (
       <header>
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="Logo" ></img>
                </div>
            </div>
       </header>
   )
}

export default Header