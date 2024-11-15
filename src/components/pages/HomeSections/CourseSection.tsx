import { FC, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import scss from "./CourseSection.module.scss";

interface CourseProps {
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

const CourseSection: FC = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [more, setMore] = useState<number | null>(null);

  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchCourses = async () => {
    try {
      if (!api) {
        console.error("API URL is not defined!");
        return;
      }
      const { data } = await axios.get(`${api}/courses`);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
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
          <div className={scss.blok}>
            {courses.map((item) => (
              <div className={scss.course} key={item.id}>
                <Image
                  src={item.image}
                  alt="Course"
                  width={300}
                  height={200}
                  className={scss.image}
                />
                <div className={scss.info}>
                  <p>{item.name}</p>
                  <p>{item.author}</p>
                  <p>{item.price} $</p>
                  {more === item.id && (
                    <>
                      <p>{item.description}</p>
                      <p>{item.city}</p>
                    </>
                  )}
                  <button onClick={() => setMore(more === item.id ? null : item.id)}>
                    {more === item.id ? "Show Less" : "Learn More"}
                  </button>
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
