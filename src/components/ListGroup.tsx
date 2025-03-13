import { useState } from "react";

function ListGroup() {
  let items = ["India", "UAE", "Russia", "USA", "France"];

  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>List group</h1>
      {items.length === 0 && <p>No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
