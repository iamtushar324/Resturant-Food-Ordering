import Header from "containers/Header";
import CategoryBox from "containers/CategoryBox";

export default function Home() {
  return (
    <div style={main}>
      <Header style={headerStyle} />
      <CategoryBox />
      <CategoryBox />
      <CategoryBox />
      <CategoryBox />
    </div>
  );
}
const main = { paddingTop: "60px" };

const headerStyle = {};
