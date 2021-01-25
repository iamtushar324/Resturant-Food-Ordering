import Input from "components/Input";
import Button from "components/Button";
import BackBtn from "assets/icons/back-button.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="wrapper-box">
        <Link to="/">
          <img className="back-btn" src={BackBtn} alt=" " />
        </Link>
        <h1 className="title">Main Logo</h1>
        <Input name="username" placeholder="Usersname" />
        <Input name="password" placeholder="Password" />
        <Button className="login-btn" label="Login" />
        <span className="new-user">
          New User ?{"  "}
          <Link to="/register">
            <span className="register-link" href="/register">
              Register
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
}
