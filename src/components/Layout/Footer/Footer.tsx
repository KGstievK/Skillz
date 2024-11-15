import Image from "next/image";
import scss from "./Footer.module.scss";
import Logo from "@/assets/Logo.svg";
import TikTok from "@/assets/icons/Tik-tok.svg";
import Insta from "@/assets/icons/Instagram.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import Facebooke from "@/assets/icons/Facebooke.svg";
import Twitter from "@/assets/icons/Twitter.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <Link href="#">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={scss.resurs}>
            <nav className={scss.link}>
              <h2>learning Platform</h2>
              <Link href="#">Courses</Link>

              <Link href="#">Free Workshops</Link>

              <Link href="#">Blog</Link>

              <Link href="#">About</Link>

              <Link href="#">Contact</Link>
            </nav>

            <nav className={scss.Template}>
              <h2>Template</h2>
              <Link href="#">Instructions</Link>

              <Link href="#">Style Guide</Link>

              <Link href="#">Licenses</Link>

              <Link href="#">Changelog</Link>
            </nav>
            <nav className={scss.icons}>
              <h2>Follow skillz</h2>
              <div className={scss.iconLink}>
                <Link href="#">
                  <Image src={TikTok} alt="" />
                </Link>

                <Link href="#">
                <Image src={Insta} alt="" />
                </Link>

                <Link href="#">
                <Image src={Youtube} alt="" />

                </Link>

                <Link href="#">
                <Image src={Facebooke} alt="" />

                </Link>

                <Link href="#">
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
