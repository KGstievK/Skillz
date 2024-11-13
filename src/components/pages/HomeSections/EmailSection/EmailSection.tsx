import scss from "./EmailSection.module.scss";

const EmailSection = () => {
  return (
    <section className={scss.EmailSection} id="Contact">
      <div className="container">
        <div className={scss.content}>
          <h1 className="title">You have the power to define your future.</h1>
          <div className={scss.email}>
            <input type="text" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
