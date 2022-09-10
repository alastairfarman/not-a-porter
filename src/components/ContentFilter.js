import { useState } from "react";

export default function ContentFilter(props) {
  const [filteredByCategory, setFilteredByCategory] = useState("All");

  function filterProduct(value) {
    props.reset();
    let products = props.products;
    let newArray = products.filter((product) => {
      return product.category.includes(value);
    });
    props.setFilter(newArray);
  }

  let categories = [
    ...new Set(props.products.map((product) => product.category)),
  ];

  function calcResults() {
    let number = props.filter.length;

    switch (number) {
      case 1:
        return `${number} Result`;

      default:
        return `${number} Results`;
    }
  }

  return (
    <>
      <h4>{calcResults()}</h4>
      <h3>Category</h3>
      <h4>{filteredByCategory}</h4>
      <div className="radio-option">
        <input type="radio" name="category" onClick={props.reset} defaultChecked />
        All
      </div>
      {categories.map((category) => {
        return (
          <div className="radio-option">
            <input
              type="radio"
              name="category"
              value={category}
              onClick={(e) => filterProduct(e.target.value)}
            />
            <div>{category}</div>
          </div>
        );
      })}
    </>
  );
}
