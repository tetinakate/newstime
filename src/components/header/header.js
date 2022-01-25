import React from "react";
import { Link, NavLink } from 'react-router-dom'

import './header.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className="logo"><Link to='/'>PostsTime</Link></div>
            <nav>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/about'>О сайте</NavLink></li>
                <li><NavLink to='/posts'>Посты</NavLink></li>
                <li><NavLink to='/authors'>Авторы</NavLink></li>
                <li><NavLink to='/todo-list'>Список дел</NavLink></li>
                <li><NavLink to='/xo-game'>Крестики-нолики</NavLink></li>
                <li><NavLink to='/calculator'>Калькулятор</NavLink></li>
                <li><NavLink to='/slider'>Слайдер</NavLink></li>
            </nav>
        </div>
    );
}