import AddToCartBtn from "components/AddToCartBtn";

const PizzaPhoto =
  "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=";

export default function CartItemBox({ name = " ", description = " ", price = " ", imgUrl = PizzaPhoto }) {
  return (
    <div className="cart-item-box">
      <div className="wrapper">
        <img className="image" src={imgUrl} alt=" " />
        <div className="col item-name-wrapper">
          <span className="item-name">{name} </span>
          <span className="description">{description}</span>
        </div>
        <div className="col">
          <AddToCartBtn className="quantity-btn" />
        </div>
        <div className="col price-wrapper">
          <span className="price">₹{price}</span>
        </div>
      </div>
    </div>
  );
}
