export default function PIP(props) {
  const id = props.selectedProduct.id;
  const brand = props.selectedProduct.brand;
  const title = props.selectedProduct.title;
  const price = props.selectedProduct.price;

  return (
    <>
      <div key={id} className="product-module">
        <div className="img-wrapper">
          <img src={""} alt="" />
        </div>
        <h3>{brand}</h3>
        <p className="title">{title}</p>
        <h3 className="price">£{price}</h3>
      </div>
    </>
  );
}
