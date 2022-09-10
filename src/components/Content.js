import { useState, useEffect } from "react";
import ContentFilter from "./ContentFilter";
import Products from "./Products";

export default function Content(props) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(props.products);
  }, [props]);

  function reset() {
    setFilter(props.products);
    console.log(filter)
  }

  return (
    <>
      <div className="cat-desc">
        <div className="desc-container"><h1>Clothing</h1>
        <p>Whether you need a statement piece for your next special occasion, or you're after casual weekend wear, we've got you covered with our designer clothing range. Choose from designer labels including Versace, Gucci, Saint Laurent and Dolce & Gabbana, offering designer skirts, dresses, trousers, coats and more in a range of styles and colours. There's something to suit everyone in our designer clothing collection.</p>
      </div>
      </div>
    

      <section>
        <div className="filter-head"></div>
        <div className="product-section">
          <aside className="filter-column">
            <ContentFilter
              products={props.products}
              filter={filter}
              setFilter={setFilter}
              reset={reset}
            />
          </aside>
          <div className="product-layout">
            <Products filter={filter} />
          </div>
        </div>
        <div className="reccomended-layout"></div>
      </section>
    </>
  );
}
