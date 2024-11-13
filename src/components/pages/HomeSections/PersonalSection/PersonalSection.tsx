import Image from "next/image";
import scss from "./PersonalSection.module.scss";
import Personal from "@/assets/Personal.svg"

const PersonalSection = () => {
  return (
    <section className={scss.PersonalSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image src={Personal} alt="Personal" />
          </div>
          <div className={scss.info}>
            <h1 className="title">Get personalized learning recommendations</h1>
            <p className={scss.Lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
