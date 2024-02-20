const ListItem = ({ listItemText, itemIndex, setShoppingList }) => {
  const handleRemoveItem = () => {
    setShoppingList((prevShoppingList) => {
      const newShoppingList = [...prevShoppingList];
      newShoppingList.splice(itemIndex, 1);
      return newShoppingList;
    });
  };

  return (
    <div className="listItem">
      <div>{listItemText}</div>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default ListItem;
