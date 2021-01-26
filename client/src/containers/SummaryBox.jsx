import Button from "components/Button";

export default function SummaryBox() {
  return (
    <div className="summary-box">
      <h1 className="summary-title">Summary</h1>
      <span className="summary-item">
        <span className="summary-item-left">Items</span>
        <span className="summary-item-right"> + ₹ 1000 </span>
      </span>
      <span className="summary-item">
        <span className="summary-item-left">Tax</span>
        <span className="summary-item-right"> + ₹ 10 </span>
      </span>
      <span className="summary-item">
        <span className="summary-item-left-total">Total</span>
        <span className="summary-item-right-total">  ₹ 1010 </span>
      </span>
      <Button size="l" style={{width:"200px"}} className="checkout-btn" label="Checkout" />
    </div>
  );
}
