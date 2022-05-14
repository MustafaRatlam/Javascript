function Card({ title, price, click, image, category, size, id }) {
  return (
    <div className="card border-1 card-cs ">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <h2>{price}</h2>
        <p>{category}</p>
        <p>{size}</p>
        <p>{id}</p>

      </div>

      <img className="card-image-bottom" src={image} alt="" />
      <button className="btn btn-primary p-3" onClick={click}>
        add to Cart
      </button>
    </div>
  );
}

export default Card;

// price;
// Size;
// category;
// image;
// title;
// ;
