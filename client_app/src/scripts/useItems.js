import { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

let initialState = { items: [] };
if (localStorage.getItem("state"))
  initialState.items = JSON.parse(localStorage.getItem("state"));

const reducer = (state, action) => {
  switch (action.type) {
    case "addNewItem": {
      const { itemName, itemPrice } = action;
      const itemId = uuidv4();
      const itemCompleted = false;
      let newItem = { itemId, itemName, itemPrice, itemCompleted };
      return { items: [...state.items, newItem] };
    }
    case "setItemToCompleted": {
      const { itemId } = action;
      const newItems = state.items.map((item) =>
        item.itemId === itemId ? { ...item, itemCompleted: true } : item
      );
      return { items: newItems };
    }
    case "sortItemsList": {
      const { accortingTo } = action;

      let newItems = [...state.items];
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

      return { items: newItems };
    }
    default:
      throw new Error();
  }
};

export default function useItems() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.items.length === 0) return;
    localStorage.setItem("state", JSON.stringify(state.items));
  }, [state.items]);

  const completedItems = state.items.filter(
    (item) => item.itemCompleted === true
  );
  const incompletedItems = state.items.filter(
    (item) => item.itemCompleted === false
  );

  const isEmptyList = state.items.length === 0;

  return { isEmptyList, completedItems, incompletedItems, dispatch };
}
