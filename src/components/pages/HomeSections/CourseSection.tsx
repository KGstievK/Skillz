import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./CourseSection.module.scss";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface coursesProps {
  id: number;
  name: string;
  author: string;
  price: number;
  image: string;
  description: string;
  city: string;
  created_date: string;
  updated_date: string;
}

const CourseSection: FC<coursesProps> = () => {
  const [courses, setCourses] = useState<coursesProps[]>([]);
  const [more, setMore] = useState(0)

  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchCourses = async () => {
    const { data } = await axios.get(`${api}/courses`);
    setCourses(data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <section className={scss.CourseSection} id="Courses">
      <div className="container">
        <div className={scss.content}>
          <h1 className="title">Featured Courses</h1>
          <p className="Lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button>View All Courses</button>
          <div className="blok">
            {courses.map((item) => (
              <div className={scss.course} key={item.id}>
                <img src={item.image} alt="Course" />
                <div className={scss.info}>
                  <p>{item.name}</p>
                  <p>{item.author}</p>
                  <p>{item.price}</p>
                  {more === item.id ? (
                    <>
                      <p style={{
                      display: more ? "" : 'block'
                    }}>{item.description}</p>
                    <p style={{
                      display: more ? "" : 'block'
                    }}>{item.city}</p>
                      </>
                  ) : null}
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

export default CourseSection;
