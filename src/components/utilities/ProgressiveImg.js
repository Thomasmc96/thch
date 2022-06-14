import React, { useState, useEffect } from "react";
import "./ProgressiveImg.css";

const ProgressiveImg = ({ src, placeholderSrc, ...props }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

    useEffect(() => {
        const img = new Image();
        console.log(src)
        img.src = src;
        img.onload = () => {
            console.log("loaded");
            setImgSrc(src);
        };
    }, [src]);

    return (
        <img
            {...{ src: imgSrc, ...props }}
            alt={props.alt || ""}
            className={`${customClass} ${props.className}`}
        />
    );
};
export default ProgressiveImg;