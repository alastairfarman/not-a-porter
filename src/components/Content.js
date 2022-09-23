import { set } from "lodash";
import { useState, useEffect } from "react";
import ContentFilter from "./ContentFilter";
import Products from "./Products";
import Sort from "./Sort";
const _ = require("lodash"); 

export default function Content(props) {
  const [currentPage, setCurrentPage] = useState();
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState(["Price High to Low"]);


  useEffect(() => {
    props.setLoading(true);
    setFilter(props.products);
    props.setLoading(false);
  }, [props]);

  function reset() {
    props.setLoading(true);
    setFilter(props.products);
    props.setLoading(false);
  }

  function sortHiLo() {
    setFilter(_.orderBy(filter,['price'],['desc']))
  }

  function sortLoHi() {
    setFilter(_.orderBy(filter,['price'],['asc']))
  }

  function sortFilter(selected) {
    switch (selected) {
      case selected = "Price High to Low":
        sortHiLo();
        break;
      case selected = "Price Low to High":
        sortLoHi();
        break;
        default:
    }
  }

  return (
    <>
      <div className="cat-desc">
        <div className="desc-container">
          <h1>Clothing</h1>
          <p>
            Whether you need a statement piece for your next special occasion,
            or you're after casual weekend wear, we've got you covered with our
            designer clothing range. Choose from designer labels including
            Versace, Gucci, Saint Laurent and Dolce & Gabbana, offering designer
            skirts, dresses, trousers, coats and more in a range of styles and
            colours. There's something to suit everyone in our designer clothing
            collection.
          </p>
        </div>
      </div>

      <section>
        <div className="product-section">
          <aside className="filter-column">
            <ContentFilter
              products={props.products}
              filter={filter}
              setFilter={setFilter}
              reset={reset}
            />
          </aside>
          <div>
            <Sort sort={sort} setSort={setSort} sortFilter={sortFilter} />
            <div className="product-layout">
              <Products filter={filter} loading={props.loading} />
            </div>
          </div>
          <div className="reccomended-layout"></div>
        </div>
      </section>
    </>
  );
}
