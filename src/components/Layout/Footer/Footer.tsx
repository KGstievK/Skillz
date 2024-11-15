import Image from "next/image";
import scss from "./Footer.module.scss";
import Logo from "@/assets/Logo.svg";
import TikTok from "@/assets/icons/Tik-tok.svg";
import Insta from "@/assets/icons/Instagram.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import Facebooke from "@/assets/icons/Facebooke.svg";
import Twitter from "@/assets/icons/Twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <Link to="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={scss.resurs}>
            <nav className={scss.link}>
              <h2>learning Platform</h2>
              <Link to="">Courses</Link>

              <Link to="">Free Workshops</Link>

              <Link to="">Blog</Link>

              <Link to="">About</Link>

              <Link to="">Contact</Link>
            </nav>

            <nav className={scss.Template}>
              <h2>Template</h2>
              <Link to="">Instructions</Link>

              <Link to="">Style Guide</Link>

              <Link to="">Licenses</Link>

              <Link to="">Changelog</Link>
            </nav>
            <nav className={scss.icons}>
              <h2>Follow skillz</h2>
              <div className={scss.iconLink}>
                <Link to="">
                  <Image src={TikTok} alt="" />
                </Link>

                <Link to="">
                <Image src={Insta} alt="" />
                </Link>

                <Link to="">
                <Image src={Youtube} alt="" />

                </Link>

                <Link to="">
                <Image src={Facebooke} alt="" />

                </Link>

                <Link to="">
                <Image src={Twitter} alt="" />

                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
