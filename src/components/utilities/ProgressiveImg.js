import React, { useState, useEffect } from "react";
import "./ProgressiveImg.css";

const ProgressiveImg = ({ src, placeholderSrc, ...props }) => {

    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    // Set classes depending of img is loaded
    const customClass = imgSrc === placeholderSrc ? "loading" : "loaded";

    useEffect(() => {
        const img = new Image();
        img.src = src;

        // Set image state when img is loaded
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src]);

    return (
        <img
            {...{ src: imgSrc, ...props }}
            alt={props.alt}
            className={`${customClass} ${props.className}`}
        />
    );
};
export default ProgressiveImg;