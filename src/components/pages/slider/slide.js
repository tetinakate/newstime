import React, { useEffect, useState, useRef } from "react";

export const Slide = ({ src, alt }) => {
    const [isActive, setActive] = useState(false);
    const refContainer = useRef();

    const handleClickSlide = () => {
        setActive(true)
    };

    const func = (event) => {
        if(!refContainer?.current?.contains(event.target)){
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', func);
        return () => {
            document.removeEventListener('click', func);
        }
    }, [])

    return (
        <div
            ref={refContainer}
            className={`slide ${isActive ? 'active' : ''}`}
            style={{backgroundImage: `url(${src})`}}
            onClick={handleClickSlide}
            
        >
            <h3>{alt}</h3>
        </div>
    )
};