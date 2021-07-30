import React, { useState, useEffect } from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import IntroSectionComponent from "./components/IntroSectionComponent";
import FormComponent from "./components/FormComponent";
import CompletedItemsComponent from "./components/CompletedItemsComponent";
import ItemListComponent from "./components/ItemListComponent";
import useItems from "./scripts/useItems";

function App() {
  const { isEmptyList, completedItems, incompletedItems, dispatch } = useItems();
  const [searchParam, setSearchParam] = useState("");

  //  Incompleted Items After Applying Search
  const filteredIncompletedItems = searchParam
    ? incompletedItems.filter(
        (item) =>
          item.itemName.includes(searchParam) ||
          item.itemPrice.includes(searchParam)
      )
    : incompletedItems;

  return (
    <div>
      {/* Start of the page */}
      <Header filterUponSearch={setSearchParam} isEmptyList={isEmptyList}/>
      <main>
        <IntroSectionComponent isEmptyList={isEmptyList} />
        {!isEmptyList && (
          <ItemListComponent
            incompletedItems={filteredIncompletedItems}
            dispatch={dispatch}
          />
        )}
        <FormComponent dispatch={dispatch} />
        <CompletedItemsComponent completedItems={completedItems} />
      </main>
      <Footer />

      {/* End of the page */}
    </div>
  );
}

export default App;
