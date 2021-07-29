import React from "react";
import ItemComponent from "./ItemComponent";

export default function ItemListComponent({ incompletedItems, setItemsState }) {
  const sortItems = (accortingTo = "name") => {
    setItemsState((items) => {
      let newItems = [...items];
      newItems.sort(function (a, b) {
        let comA = "";
        let comB = "";
        if (accortingTo === "price") {
          comA += a.itemPrice;
          comB += b.itemPrice;
        } else {
          comA = a.itemName.toUpperCase();
          comB = b.itemName.toUpperCase();
        }

        return comA.localeCompare(comB);
      });
      return newItems;
    });
  };

  const setItemComplete = (itemId) => {
    setItemsState((items) => {
      let newItems = [...items];
      let itemIndex = newItems.findIndex((i) => i.itemId === itemId);
      newItems[itemIndex].itemCompleted = true;
      return newItems;
    });
  };

  return (
    <>
      <section className="controll-section">
        <div className="controlls">
          <span>Sort By:</span>
          <button className="link" onClick={() => sortItems("name")}>
            Name
          </button>
          <button className="link" onClick={() => sortItems("price")}>
            Price
          </button>
        </div>
      </section>
      <section className="list-section">
        {incompletedItems.map((item, index) => (
          <ItemComponent
            key={index}
            item={item}
            itemCompleteHandler={setItemComplete}
          />
        ))}
      </section>
    </>
  );
}
