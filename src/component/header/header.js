import React from "react";
import style from './header.module.css'


const Header = (props) => {
    return (
        <header className = {style.header}>
            <h3>Список задач: {props.tasks}</h3>
        </header>
    )
}

export default Header;