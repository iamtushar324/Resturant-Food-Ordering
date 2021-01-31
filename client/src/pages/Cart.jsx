import Header from "containers/Header";
import CartItemBox from "containers/CartItemBox";
import SummaryBox from "containers/SummaryBox";

const itemsArray = [
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    name: "Pizza",
    description: "Small with Corn",
    price: "200",
    imgUrl:
      "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
];

export default function Cart() {
  return (
    <div className="cart">
      <Header />
      <h1 className="title">Your Cart</h1>
      <div className="cart-wrapper">
        <div className="item-list">
          {itemsArray.map((e, i) => {
            return <CartItemBox name={e.name} description={e.description} price={e.price} imgUrl={e.imgUrl} />;
          })}
        </div>
        <SummaryBox />
      </div>
      <div className="order-summary"></div>
    </div>
  );
}
