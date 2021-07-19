import React from "react";

const ImageComponent = ({ imageSrc , imageClassName, imageAlt }) => {
    return(
        <img alt={imageAlt} className={imageClassName} src={require("./"+imageSrc).default} />
    )
}

export default ImageComponent;