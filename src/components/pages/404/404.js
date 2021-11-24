import React from "react";
import { Link } from "react-router-dom";

import "./404.css";

export const NotFoundPage = () => {
    return(
        <div className='error-404'>
            <h1>Данная страница не найдена!</h1>
            <div><span>404</span> Page Not Found </div>
            <p>
                <Link to="/">Go Home</Link>
            </p>
        </div>
    )
}