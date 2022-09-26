import { useState, useEffect } from "react";
import ContentFilter from "./ContentFilter";
import Products from "./Products";
import Sort from "./Sort";
import PIP from "./PIP";

const _ = require("lodash");

export default function Content(props) {
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState(["Price High to Low"]);
  const [selectedProduct, setSelectedProduct] = useState({});

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

  function sortFilter(selected) {
    switch (selected) {
      case (selected = "Price High to Low"):
        setFilter(_.orderBy(filter, ["price"], ["desc"]));
        break;
      case (selected = "Price Low to High"):
        setFilter(_.orderBy(filter, ["price"], ["asc"]));
        break;
      default:
    }
  }

  function getSelectedProductObject(PID) {
    const selectedProductObject = filter.find((object) => object.id == PID);
    setSelectedProduct(selectedProductObject);
  }

  function Clothing() {
    return (
      <>
        <div className="cat-desc">
          <div className="desc-container">
            <h1>Clothing</h1>
            <p>
              Whether you need a statement piece for your next special occasion,
              or you're after casual weekend wear, we've got you covered with
              our designer clothing range. Choose from designer labels including
              Versace, Gucci, Saint Laurent and Dolce &amp; Gabbana, offering
              designer skirts, dresses, trousers, coats and more in a range of
              styles and colours. There's something to suit everyone in our
              designer clothing collection.
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
                <Products
                  filter={filter}
                  loading={props.loading}
                  setCurrentPage={props.setCurrentPage}
                  setSelectedProduct={getSelectedProductObject}
                />
              </div>
            </div>
            <div className="reccomended-layout"></div>
          </div>
        </section>
      </>
    );
  }

  function PageContent() {
    switch (props.currentPage) {
      case "home":
        return "Homepage";
      case "clothing":
        return <Clothing />;
      case "PIP":
        return (
          <PIP
            selectedProduct={selectedProduct}
            setCurrentPage={props.setCurrentPage}
          />
        );
      default:
    }
  }

  return (
    <>
      <PageContent />
    </>
  );
}
