import Image from "next/image";
import scss from "./Header.module.scss";
import Logo from "@/assets/Logo.svg";
import Cart from "@/assets/Cart.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className={scss.sale}>
        <p>One week only—50% off all courses with code 50OFF at checkout</p>
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <a href="/">
              <Image src={Logo} alt="Logo" />
            </a>
          </div>
          <div className={scss.nav}>
            <a href="#Courses">Courses</a>

            <a href="#Workshops">Free Workshops</a>

            <a href="#Blog">Blog</a>

            <a href="#About">About</a>

            <a href="#Contact">Contact</a>
          </div>
          <div className={scss.cart}>
            <a  href="">
              <Image src={Cart} alt="Cart" />
            </a>
          </div>
          <div className={scss.burgerMenu}>
						<BurgerMenu />
					</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
