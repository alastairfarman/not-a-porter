export default function Products(props) {
  let products = props.filter;

  return (
    <>
      {products.map((product) => {
        let imgUrl = `./assets/img/${product.id}.avif`;

        return (
          <div key={product.id} className="product-module">
            <img src={imgUrl} alt="" />
            <h3>{product.brand}</h3>
            <p className="title">{product.title}</p>
            <h3 className="price">£{product.price}</h3>
          </div>
        );
      })}
    </>
  );
}
