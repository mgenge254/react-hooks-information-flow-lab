import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;
