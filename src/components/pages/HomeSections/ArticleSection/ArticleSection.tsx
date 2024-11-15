import { FC, useEffect, useState } from 'react';
import scss from './ArticleSection.module.scss'
import axios from 'axios';

interface ArticlProps {
  id: number
  name: string
  author: string
  image: string
  created_date: string
  updated_date: string
}

const ArticleSection: FC = () => {
  const [courses, setCourses] = useState<ArticlProps[]>([]);
  const [more, setMore] = useState(0)

  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchCourses = async () => {
    const { data } = await axios.get(`${api}/articles`);
    setCourses(data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <section className={scss.ArticleSection}>
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
                  <p>{item.created_date}</p>
                  <p>{item.name}</p>
                  <p>{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection