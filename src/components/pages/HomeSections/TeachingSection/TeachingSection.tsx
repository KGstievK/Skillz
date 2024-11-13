import Image from "next/image";
import scss from "./TeachingSection.module.scss";
import inline from "@/assets/inline.svg";
import teaching from "@/assets/Teaching.jpg";

const TeachingSection = () => {
  return (
    <section className={scss.TeachingSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image src={inline} alt="inline" />
            <Image src={teaching} alt="teaching" />
            <div className={scss.figure}></div>
            <div className={scss.figure2}></div>
            <div className={scss.figure3}></div>
          </div>
          <div className={scss.info}>
            <h1 className="title">A Passion for Teaching</h1>
            <p className={scss.Lorem}>
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <button>About Skillz</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
