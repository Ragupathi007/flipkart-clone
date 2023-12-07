import "./NavBar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import LoginModel from "../LoginModel/LoginModel";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../supabase";
import { removeUser } from "../../slices/userSlice";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser());
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2007-2015.png"
              //src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipcartlogo"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for Products,Brands and more"
              className="navbar-searchbox"
            />

            <button className="searchbtn">
              <IoSearch />
            </button>
          </div>
          {user ? (
            <h3 onClick={signOut}>@{user?.email.slice(3, 12)}</h3>
          ) : (
            <button className="navbar-btn" onClick={() => setIsOpen(true)}>
              Login
            </button>
          )}
          <div className="navbar-bcs">
            <h3>Become a seller</h3>
          </div>
          <div className="navbar-more">
            <h3>
              more
              <i className="moredown">
                <MdKeyboardArrowDown />
              </i>
            </h3>
          </div>
          <div className="navbar-cart"></div>

          <div className="cart-icon">
            <FaShoppingCart />
            <Link to={"/cart"} className="cart">
              Cart
            </Link>
          </div>
        </div>
        <LoginModel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default NavBar;
