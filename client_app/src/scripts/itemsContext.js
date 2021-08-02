import React, { useContext } from "react";
import useItems from "./useItems";

const ItemsContext = React.createContext(null);

export function ItemsContextProvider(props) {
  const useItemObject = useItems();
  return (
    <ItemsContext.Provider value={useItemObject}>
      {props.children}
    </ItemsContext.Provider>
  );
}

export function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
