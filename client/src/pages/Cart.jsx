import Header from "containers/Header";
import CartItemBox from "containers/CartItemBox";
import SummaryBox from "containers/SummaryBox";

export default function Cart() {
  return (
    <div className="cart">
      <Header />
      <h1 className="title">Your Cart</h1>
      <div className="cart-wrapper">
        <div className="item-list">
          <CartItemBox />
          <CartItemBox />
          <CartItemBox />
          <CartItemBox />
          <CartItemBox />
        </div>
        <SummaryBox />
      </div>
      <div className="order-summary"></div>
    </div>
  );
}
