import React from "react";
import ImageComponent  from "./ImageComponent";

const ItemComponent = ({itemId, itemName, itemPrice, itemCompleteHandler}) => {
  return (
    <article>
      <div className="check-completed">
        <label>
          <input name="checkme" type="checkbox" onChange={(e)=>itemCompleteHandler(e,itemId)}/>
          <span></span>
        </label>
      </div>
      <h4>
        {itemName},<span className="price">{itemPrice}:-</span>
      </h4>
      <div className="item-img">
        <ImageComponent
          imageAlt="item"
          imageSrc="assets/images/shopping-item.jpeg"
          imageClassName=""
        />
      </div>
    </article>
  );
};

export default ItemComponent;