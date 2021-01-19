import UserProfileBtn from "components/UserProfileBtn";
import MainLogo from "components/MainLogo";
import { baseStyles } from "styles/baseStyles";

export default function Header() {
  return (
    <div style={main}>
      <MainLogo />
      <UserProfileBtn />
    </div>
  );
}

const main = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: " 0 20px",
  height: "56px",
  backgroundColor: baseStyles.backgroundColor,
  borderBottom: "solid 0.5px #333",
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 100,
};
