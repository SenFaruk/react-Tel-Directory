import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log("filtered", filtered);
  return (
    <div>
      <h1>CONTACTS</h1>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contacts, i) => (
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contact: ({filtered.length})</p>
    </div>
  );
}

export default List;
