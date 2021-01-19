import { baseStyles } from "styles/baseStyles";
import AddToCartBtn from "components/AddToCartBtn";

const pizzaImgUrl =
  "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=";

export default function ItemBox({
  imgUrl = pizzaImgUrl,
  name = "Pizza",
  price = "200",
  description = "Pan Pizza with cheese",
}) {
  return (
    <div style={main}>
      <img src={imgUrl} alt=" " style={imgStyle} />
      <h2 style={nameStyle}>
        {name}
        <span style={priceStyle}>₹{price}</span>
      </h2>
      <h4 style={descriptionStyle}>{description}</h4>
      <span style={btnWrapper}>
        <AddToCartBtn />
      </span>
    </div>
  );
}

const btnWrapper = { position: "absolute", left: "5px", padding: "10px 0px" };

const priceStyle = { fontSize: "16px", marginLeft: "18px" };

const main = {
  margin: "20px",
  position: "relative",
  paddingBottom: "30px",
};
const imgStyle = {
  height: "150px",
  width: "130px",
  objectFit: "cover",
  borderRadius: "15px",
};
const nameStyle = { margin: "5px", fontSize: "20px" };
const descriptionStyle = { margin: "5px", fontSize: "10px", color: baseStyles.lightTextColor };
