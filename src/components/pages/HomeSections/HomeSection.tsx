import Image from "next/image";
import scss from "./HomeSection.module.scss";
import inline from "@/assets/inline.svg";
import mobile from "@/assets/mobile.jpg";

const HomeSection = () => {
  return (
    <section className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.info}>
            <p>Featured Course</p>
            <h1>Run your own online learning platform</h1>
            <p className={scss.Lorem}>
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <p>Kathryn Murphy</p>
            <button>Learn More</button>
          </div>
          <div className={scss.image}>
            <Image src={inline} alt="inline" />
            <Image src={mobile} alt="mobile" />
            <div className={scss.figure}></div>
            <div className={scss.figure2}></div>
            <div className={scss.figure3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
