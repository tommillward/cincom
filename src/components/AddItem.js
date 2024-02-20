import { useState } from "react";

const AddItem = ({ setShoppingList }) => {
  const [newListItem, setNewListItem] = useState("");
  return (
    <div>
      <input
        placeholder="Add a new item…"
        value={newListItem}
        onChange={(e) => setNewListItem(e.target.value)}
      />
      <button
        disabled={!newListItem}
        onClick={(e) => {
          setShoppingList((prevState) => [...prevState, newListItem]);
          setNewListItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
