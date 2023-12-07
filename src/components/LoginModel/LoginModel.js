import { useState } from "react";
import "./LoginModel.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
const LoginModel = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
  const dispatch = useDispatch();

  const loginDataFalse = () => {
    setLoginType(false);
    setEmail("");
    setPassword("");
  };
  const logindataTrue = () => {
    setLoginType(true);
    setEmail("");
    setPassword("");
  };

  const loginFormClear = () => {
    setIsOpen(false);
    setEmail("");
    setPassword("");
  };

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data.user) {
      alert("Account created scuessfully,plese verify your email");
    }
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
    if (error) alert(error.message);
    dispatch(setUser(data.user));
  };
  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get Access to your Orders,Wishlist and Recommendation
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="right"
            className="Login-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing,you agree to Flipkart's
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}>Privacy Policy.</span>
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => loginDataFalse(false)}>
              New to Flipcart?Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => logindataTrue()}>
              Already an user?Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => loginFormClear()}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModel;
