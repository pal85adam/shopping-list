import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemComponent from "./ItemComponent";
import ErrorComponent from "./ErrorComponent";
import PageTitleSectionComponent from "./PageTitleSectionComponent";
import { v4 as uuidv4 } from "uuid";

function App() {
  
  const storedItems = () => {
    if (!localStorage.getItem("state")) return [];
    return JSON.parse(localStorage.getItem("state"));
  };
  
  const [items, setItem] = useState(storedItems());
  const [viewSubmitForm, setViewSubmitForm] = useState(false);
  const [viewErrorMessage, setViewErrorMessage] = useState(false);

  const itemNameInput = useRef("");
  const itemPriceInput = useRef("");

  const sortItems = (accortingTo = "name") => {
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
    setItem(newItems);
  };

  const itemCompleteHandler = (e, itemId) => {
    console.log(itemId);
    //e.preventDefault();
    let newItems = [...items];
    let itemIndex = newItems.findIndex((i) => i.itemId === itemId);
    newItems[itemIndex].itemCompleted = true;
    setItem(newItems);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const itemId = uuidv4();
    const itemName = itemNameInput.current.value;
    const itemPrice = itemPriceInput.current.value;
    const itemCompleted = false;
    let newItems = [...items, { itemId, itemName, itemPrice, itemCompleted }];
    setItem(newItems);
    setViewSubmitForm(false);
    //console.log(itemName.current.value);
  };

  const viewSubmitFormHandler = () => {
    setViewSubmitForm(true);
  };

  useEffect(() => {
    //setItem(storedItems());
    //console.log(JSON.stringify(items));
    localStorage.setItem("state", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    setItem(storedItems());
  }, []);

  return (
    <div>
      {/* Start of the page */}
      <Header />
      <main>
        {viewErrorMessage && <ErrorComponent />}
        <PageTitleSectionComponent isNoItems={items.length === 0} />
        <section className="controll-section">
          <div className="controlls">
            <span>Sort By:</span>
            <button className="link" onClick={ ()=> sortItems("name") }>Name</button>
            <button className="link" onClick={ ()=> sortItems("price") }>Price</button>
          </div>
        </section>
        <section className="list-section">
          {items
            .filter((item) => item.itemCompleted === false)
            .map((item, index) => (
              <ItemComponent
                key={index}
                itemId={item.itemId}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemCompleteHandler={itemCompleteHandler}
              />
            ))}
        </section>
        <section className="controll-section light-seperator">
          {!viewSubmitForm && (
            <button className="button" onClick={viewSubmitFormHandler}>
              Add New
            </button>
          )}
          {viewSubmitForm && (
            <form onSubmit={(e) => formSubmitHandler(e)}>
              <input placeholder="Name" ref={itemNameInput} type="text" />
              <input placeholder="Price" ref={itemPriceInput} type="text" />
              <input className="button" type="submit" value="submit" />
            </form>
          )}
          <div className="controlls">
            <button className="link">View completed items</button>
          </div>
          {/* completed items */}
          {items
            .filter((item) => item.itemCompleted === true)
            .map((item, index) => (
              <div key={index}>{item["itemName"]}</div>
            ))}
          {/* end of completed items */}
        </section>
      </main>
      <Footer />

      {/* End of the page */}
    </div>
  );
}

export default App;
