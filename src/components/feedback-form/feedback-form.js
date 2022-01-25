import React, { useState } from "react";

import "./feedback-form.css";

export const FeedbackForm = () => {
    const [name, setName] = useState("Введите имя");
    const [mail, setMail] = useState("email@mail.ru");

console.log(mail, name)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form sent');

    }
    const handleChange = (event) => {
        const { target, name } = event;

        switch(name){
            case "name":
                setName(target.value);
            break;
            case "email":
                setMail(target.value);
            break;
            default:
                setName(target.value);
            break;
        }
    }

    return(
        <div className="feedback-form">
            <form id="feedback" onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input type="text"
                           placeholder={name}
                           onChange={handleChange}
                           name="name" />
                </label>
                <label>
                    Email:
                    <input type="email"
                           placeholder={mail}
                           onChange={handleChange}
                           name="email" />
                </label>
                <input type="submit" value="Отправить"  />
            </form>
            
        </div>
    )
}