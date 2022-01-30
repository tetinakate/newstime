import React from "react";
import images from "../../../../src/assets/images/slider";
import { Slide } from "./slide";

import "./slider.css";

export const Slider = () => {
    
    return(
        <div className="container-block slider">
            {
                images.map(({ id, src, alt}) => {
                    return <Slide
                        key={id}
                        src={src}
                        alt={alt}
                    />
                })
            }
        </div>
    )
}