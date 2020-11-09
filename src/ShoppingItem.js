function ShoppingItem(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={props.photoUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
        <a
          onClick={(e) => props.addToCardClick(props.name)}
          className="btn btn-primary"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ShoppingItem;
