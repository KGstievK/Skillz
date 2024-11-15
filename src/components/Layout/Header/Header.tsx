import Image from "next/image";
import scss from "./Header.module.scss";
import Logo from "@/assets/Logo.svg";
import Cart from "@/assets/Cart.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Link from "next/link";
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className={scss.sale}>
        <p>One week only—50% off all courses with code 50OFF at checkout</p>
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <Link href="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={scss.nav}>
            <Link href="#Courses">Courses</Link>

            <Link href="#Workshops">Free Workshops</Link>

            <Link href="#Blog">Blog</Link>

            <Link href="#About">About</Link>

            <Link href="#Contact">Contact</Link>
          </div>
          <div className={scss.cart}>
            <Link  href="">
              <Image src={Cart} alt="Cart" />
            </Link>
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
