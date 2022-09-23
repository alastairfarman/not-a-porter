export default function Sort(props) {

let sortOptions = ["Price High to Low", "Price Low to High"];
    
  function openSort() {
    let filter = document.getElementById("sort");

    if (filter.classList.contains("minimised")) {
      filter.setAttribute("class", "");
    } else {
      filter.setAttribute("class", "minimised");
    }
    arrows();
  }

  function arrows() {
    let arrows = document
      .getElementById("sort")
      .getElementsByClassName("arrow");

    for (let i = 0; i < arrows.length; i++) {
      let arrow = arrows[i];

      if (arrow.classList.contains("closed")) {
        arrow.classList.remove("closed");
      } else {
        arrow.classList.add("closed");
      }
    }
  }

  function handleClick(e) {
    props.setSort(e.target.innerText)
    props.sortFilter(e.target.innerText)
  }


  return (
    <>
      <div className="sort-container">
        <div id="sort" className="minimised" onClick={openSort}>
          <ul>
            {sortOptions.map((option) => (
              <li key={option} onClick={(e) => handleClick(e)}>{option}</li>
            ))}
          </ul>
          <div className="arrow"></div>
        </div>
      </div>
    </>
  );
}
