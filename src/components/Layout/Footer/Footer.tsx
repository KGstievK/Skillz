import Image from "next/image";
import scss from "./Footer.module.scss";
import Logo from "@/assets/Logo.svg";
import TikTok from "@/assets/icons/Tik-tok.svg";
import Insta from "@/assets/icons/Instagram.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import Facebooke from "@/assets/icons/Facebooke.svg";
import Twitter from "@/assets/icons/Twitter.svg";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <a href="/">
              <Image src={Logo} alt="Logo" />
            </a>
          </div>
          <div className={scss.resurs}>
            <nav className={scss.link}>
              <h2>learning Platform</h2>
              <a href="">Courses</a>

              <a href="">Free Workshops</a>

              <a href="">Blog</a>

              <a href="">About</a>

              <a href="">Contact</a>
            </nav>

            <nav className={scss.Template}>
              <h2>Template</h2>
              <a href="">Instructions</a>

              <a href="">Style Guide</a>

              <a href="">Licenses</a>

              <a href="">Changelog</a>
            </nav>
            <nav className={scss.icons}>
              <h2>Follow skillz</h2>
              <div className={scss.iconLink}>
                <a href="">
                  <Image src={TikTok} alt="" />
                </a>

                <a href="">
                <Image src={Insta} alt="" />
                </a>

                <a href="">
                <Image src={Youtube} alt="" />

                </a>

                <a href="">
                <Image src={Facebooke} alt="" />

                </a>

                <a href="">
                <Image src={Twitter} alt="" />

                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
