const ProductCard = (props) => {
  return (
    <div className="col-md-4">
      <div class="card" style={{ width: "100%" }}>
        <img src={props.productImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.productName}</h5>
          <p class="card-text">
            {props.productPrice}
            <p class="card-text">{props.productDescription}</p>
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
