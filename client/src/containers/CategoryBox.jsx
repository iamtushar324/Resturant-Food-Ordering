import ItemBox from "./ItemBox";

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

export default function CategoryBox({ title = "Title", items = [] }) {
  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
      <div className="hide-scrollbar" style={wrapper}>
        {itemsArray.map((e, i) => {
          return <ItemBox name={e.name} description={e.description} price={e.price} imgUrlUrl={e.imgUrl} />;
        })}
      </div>
    </div>
  );
}

const titleStyle = {
  fontSize: "26px",
  marginLeft: "20px",
};

const wrapper = {
  overflowX: "scroll",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "nowrap",
};
