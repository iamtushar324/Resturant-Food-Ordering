import ItemBox from "./ItemBox";
export default function CategoryBox({ title = "Title", items = [] }) {
  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
      <div className="hide-scrollbar" style={wrapper}>
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
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
