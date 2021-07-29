import React, { useState, useEffect } from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import IntroSectionComponent from "./components/IntroSectionComponent";
import FooterComponent from "./components/FormComponent";
import CompletedItemsComponent from "./components/CompletedItemsComponent";
import ItemListComponent from "./components/ItemListComponent";

function App() {
  const [items, setItems] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const completedItems = items.filter((item) => item.itemCompleted === true);
  let incompletedItems = items.filter((item) => item.itemCompleted === false);

  const isEmptyList = items.length === 0;

  //  Incompleted Items After Applying Search
  incompletedItems = searchParam
    ? incompletedItems.filter(
        (item) =>
          item.itemName.includes(searchParam) ||
          item.itemPrice.includes(searchParam)
      )
    : incompletedItems;

  useEffect(() => {
    if (items.length === 0) return;
    localStorage.setItem("state", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    let tempItems = [];
    if (localStorage.getItem("state"))
      tempItems = JSON.parse(localStorage.getItem("state"));
    setItems(tempItems);
  }, []);

  return (
    <div>
      {/* Start of the page */}
      <Header filterUponSearch={setSearchParam} isEmptyList={isEmptyList}/>
      <main>
        <IntroSectionComponent isEmptyList={isEmptyList} />
        {!isEmptyList && (
          <ItemListComponent
            incompletedItems={incompletedItems}
            setItemsState={setItems}
          />
        )}
        <FooterComponent setItemsState={setItems} />
        <CompletedItemsComponent completedItems={completedItems} />
      </main>
      <Footer />

      {/* End of the page */}
    </div>
  );
}

export default App;
