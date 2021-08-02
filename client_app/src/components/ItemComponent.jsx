import React from "react";

const ItemComponent = ({item, itemCompleteHandler}) => {
  const {itemId, itemName, itemPrice} = item;
  return (
    <article>
      <div className="check-completed">
        <label>
          <input name="checkme" type="checkbox" onChange={(e)=>itemCompleteHandler(itemId)}/>
          <span></span>
        </label>
      </div>
      <h4>
        {itemName},<span className="price">{itemPrice}:-</span>
      </h4>
      <div className="item-img">
        <img
          alt="item"
          src="/assets/images/shopping-item.jpeg"
          className=""
        />
      </div>
    </article>
  );
};

export default ItemComponent;