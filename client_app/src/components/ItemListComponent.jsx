import React from "react";
import ItemComponent from "./ItemComponent";

export default function ItemListComponent({ incompletedItems, dispatch }) {
  return (
    <>
      <section className="controll-section">
        <div className="controlls">
          <span>Sort By:</span>
          <button
            className="link"
            onClick={() =>
              dispatch({ type: "sortItemsList", accortingTo: "name" })
            }
          >
            Name
          </button>
          <button
            className="link"
            onClick={() =>
              dispatch({ type: "sortItemsList", accortingTo: "price" })
            }
          >
            Price
          </button>
        </div>
      </section>
      <section className="list-section">
        {incompletedItems.map((item, index) => (
          <ItemComponent
            key={index}
            item={item}
            itemCompleteHandler={(itemId) =>
              dispatch({ type: "setItemComplete", itemId })
            }
          />
        ))}
      </section>
    </>
  );
}
