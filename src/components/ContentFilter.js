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
    setFilteredByCategory(value);
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

  function openFilter() {
    let filter = document.getElementById("filter-dropdown");

    if (filter.classList.contains("minimised")) {
      filter.setAttribute("class", "");
    } else {
      filter.setAttribute("class", "minimised");
    }
    arrows();
  }

  function arrows() {
    let arrows = document.getElementById('filter-head').getElementsByClassName("arrow")

    for(let i = 0; i < arrows.length; i++){
      let arrow = arrows[i]

      if (arrow.classList.contains("closed"))
      {arrow.classList.remove("closed")}
      else {arrow.classList.add("closed")}
    }
  }

  return (
    <>
      <h4>{calcResults()}</h4>
      <div className="filter-head" id="filter-head">
        <h3>Category</h3>
        <h4>{filteredByCategory}</h4>
        <div className="arrow" onClick={openFilter}>
        </div>
      </div>
      <div id="filter-dropdown">
        <div className="radio-option">
          <input
            type="radio"
            name="category"
            onClick={props.reset}
            defaultChecked
          />
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
      </div>
    </>
  );
}
