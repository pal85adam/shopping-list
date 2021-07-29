import React from "react";

const ImageComponent = ({ imageSrc , imageClassName, imageAlt}) => {
    return(
        <img alt={imageAlt} className={imageClassName} src={require("../assets/images/logo.svg").default} />
    )
}

export default ImageComponent;