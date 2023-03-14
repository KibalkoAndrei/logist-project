import React from "react";
import ButtonHeader from "../../../UI/button/button-header/ButtonHeader";
import './Header.css'


const Header = () => {
    return (
        <header>
        <ButtonHeader  text='ВОЙТИ'/>
        <ButtonHeader  text='ЗАРЕГИСТРАЦИЯ'/>
    </header>
    );
} 

export default Header;