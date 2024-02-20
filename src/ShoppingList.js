import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState(["bread", "milk"]);
  return (
    <>
      <Header />
      <div className="list__container">
        <AddItem setShoppingList={setShoppingList} />
        {!shoppingList.length && <h2>No items in shopping list</h2>}
        {shoppingList.map((item, index) => (
          <ListItem
            listItemText={item}
            itemIndex={index}
            setShoppingList={setShoppingList}
          />
        ))}
        <button
          disabled={!shoppingList.length}
          onClick={() => setShoppingList([])}
        >
          Delete all
        </button>
      </div>
    </>
  );
};

export default ShoppingList;
