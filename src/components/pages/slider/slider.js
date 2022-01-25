import React from "react";

import images from "../../../../src/assets/images/slider";

import "./slider.css";
// TODO: implement me
export const Slider = () => {
    console.log(images);

    return(
        <div className="container-block">
            <p><img  src={images[1].src}/></p>
            {
                images.map( ({ id, src, alt }) => {
                    return <div className="slider" style={{backgroundImage:`url(${src})`}} key={alt} >{id}</div>
                })
            }
        </div>
    )
}