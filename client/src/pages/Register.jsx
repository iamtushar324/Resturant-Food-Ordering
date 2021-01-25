import Input from "components/Input";
import Button from "components/Button";
import BackBtn from "assets/icons/back-button.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="wrapper-box">
        <Link to="/">
          <img className="back-btn" src={BackBtn} alt=" " />
        </Link>
        <h1 className="title">Main Logo</h1>
        <Input name="Full Name" placeholder="Full Name" />
        <Input name="email" placeholder="Email Id" />
        <Input name="password" placeholder="Create Password" />
        <Input name="confirm-password" placeholder="Confirm Password" />
        <Button className="register-btn" label="Register" />
        <span className="new-user">
          Already Registered ?{"  "}
          <Link to="/login">
            <span className="login-link">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
