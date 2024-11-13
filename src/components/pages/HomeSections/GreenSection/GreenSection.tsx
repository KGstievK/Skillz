import Image from "next/image";
import scss from "./GreenSection.module.scss";
import Star from "@/assets/icons/STAR.svg";

const GreenSection = () => {
  return (
    <section className={scss.GreenSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.star}>
            <Image src={Star} alt="Star" />
            <Image src={Star} alt="Star" />
            <Image src={Star} alt="Star" />
            <Image src={Star} alt="Star" />
            <Image src={Star} alt="Star" />
          </div>
          <p className="rewievs">
            “Kate’s courses are a game changer. She’s thorough, organized, and
            explains things in a no-nonsense way that makes it easy for
            anyone—beginners to experts—to learn something from her courses and
            take their game to the next level.”
          </p>
          <p>James Brown, Influencer</p>
          <div className={scss.points}>
            <div className={scss.point}></div>
            <div className={scss.point}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
