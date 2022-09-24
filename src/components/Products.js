export default function Products(props) {
  let products = props.filter;

  const handleClick = (e) => {
    props.setSelectedProduct(e.target.getAttribute("data-PID"));
    props.setCurrentPage("PIP");
  };

  switch (props.loading) {
    case true:
      return (
        <>
          <div className="product-module loading">
            <div className="empty-image"></div>
            <h3 className="brand">Loading brand</h3>
            <p className="title">Loading title</p>
            <h3 className="price">£Price</h3>
          </div>
          <div className="product-module loading">
            <div className="empty-image"></div>
            <h3 className="brand">Loading brand</h3>
            <p className="title">Loading title</p>
            <h3 className="price">£Price</h3>
          </div>
          <div className="product-module loading">
            <div className="empty-image"></div>
            <h3 className="brand">Loading brand</h3>
            <p className="title">Loading title</p>
            <h3 className="price">£Price</h3>
          </div>
        </>
      );

    default:
      return (
        <>
          {products.map((product) => {
            let imgUrl = `./assets/img/${product.id}.avif`;

            return (
              <div key={product.id} className="product-module">
                <div className="img-wrapper">
                  <img
                    data-PID={product.id}
                    src={imgUrl}
                    alt=""
                    onClick={handleClick}
                  />
                </div>
                <h3>{product.brand}</h3>
                <p className="title">{product.title}</p>
                <h3 className="price">
                  £{product.price.toLocaleString("en-US")}
                </h3>
              </div>
            );
          })}
        </>
      );
  }
}
