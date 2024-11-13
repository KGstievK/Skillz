"use client"
import ArticleSection from "./HomeSections/ArticleSection/ArticleSection"
import CourseSection from "./HomeSections/CourseSection"
import EmailSection from "./HomeSections/EmailSection/EmailSection"
import GreenSection from "./HomeSections/GreenSection/GreenSection"
import HomeSection from "./HomeSections/HomeSection"
import PersonalSection from "./HomeSections/PersonalSection/PersonalSection"
import TeachingSection from "./HomeSections/TeachingSection/TeachingSection"
import WorksShopSection from "./HomeSections/WorksShopSection/WorksShopSection"

const Home = () => {
  return (
    <div >
      <HomeSection/>
      <CourseSection/>
      <PersonalSection/>
      <WorksShopSection/>
      <GreenSection/>
      <TeachingSection/>
      <ArticleSection/>
      <EmailSection/>
    </div>
  )
}

export default Home