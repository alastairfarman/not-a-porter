export default function PIP(props) {
  const id = props.selectedProduct.id;
  const brand = props.selectedProduct.brand;
  const title = props.selectedProduct.title;
  const price = props.selectedProduct.price;
  const color = props.selectedProduct.color;
  const sizes = props.selectedProduct.size;
  const desc = props.selectedProduct.description;
  const details = props.selectedProduct.details;
  const imgUrl = `./assets/img/${id}.avif`;

  function showSizes() {
    return (
      <>
        {sizes.map((size) => {
          return (
            <li key={size}>
              <button>{size}</button>
            </li>
          );
        })}
      </>
    );
  }

  function openCollapsable(e) {
    let collapsable = document.getElementById(e.target.id)

    collapsable.classList.toggle('closed')
  }

  return (
    <>
      <div className="pdp-wrapper">
        <div className="back" onClick={(e) => props.setCurrentPage("clothing")}>
          Back to Results
        </div>
        <div className="image-carousel">
          <img data-pid={id} src={imgUrl} alt="" />
        </div>
        <div className="pdp-info">
          <h3 className="pdp-brand">{brand}</h3>
          <p className="pdp-title">{title}</p>
          <h3 className="pdp-price">£{price.toLocaleString("en-US")}</h3>
          <h4 className="pdp-color">Color: {color}</h4>
          <h4>Size:</h4>
          <div className="size-buttons">{showSizes()}</div>
          <button className="addtobag">Add to Bag</button>
          <div
            className="collapsable closed"
            id="editor"
            onClick={openCollapsable}
          >
            <div className="collapsable-title" id="editor">Editors' Notes</div>
            <p>{desc}</p>
          </div>
          <div className="collapsable closed" id="details" onClick={openCollapsable}>
            <div className="collapsable-title" id="details">Details &amp; Care</div>
            <ul>
              {details.map((detail) => {
                return <li>{detail}</li>;
              })}
            </ul>
          </div>
          <h6>Product Code {id}</h6>
        </div>
      </div>
    </>
  );
}
