import { FC, useEffect, useState } from "react";
import scss from "./WorksShopSection.module.scss";
import axios from "axios";

interface WorksProps {
  id: number;
  name: string;
  description: string;
  created_date: string;
}

const WorksShopSection: FC = () => {
  const [more, setMore] = useState(0);
  const [works, setWorks] = useState<WorksProps[]>([]);

  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchCourses = async () => {
    const { data } = await axios.get(`${api}/freeworkshops`);
    setWorks(data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className={scss.WorksShopSection} id="Workshops">
      <div className="container">
        <div className={scss.content}>
          <h1 className="title">Upcoming Free Workshops</h1>
          <p className="Lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button>View All Courses</button>
          <div className="blok">
            {works.map((item) => (
              <div className={scss.course} key={item.id}>
                <div className={scss.info}>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <button onClick={() => setMore(item.id)}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksShopSection;
