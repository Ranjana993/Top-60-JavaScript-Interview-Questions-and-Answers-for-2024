import CourseCard from "./CourseCard";
import html from "../assets/html1.jpg";
import css from "../assets/css.avif";
import reactjs from "../assets/reactjs2.webp";
import js from "../assets/js.png";

const Course = () => {
  return (
    <div className="pb-20">
      <h1 className='text-4xl text-center py-12 font-playwrite'>
        Get Explored with recent and hot topics
      </h1>
      <div className="flex gap-4 w-full mt-12 justify-center items-center flex-wrap">
        <CourseCard img={html} link="/html-concepts" />
        <CourseCard img={js} link="/js-concepts" />
        <CourseCard img={reactjs} link={"/react.js-concepts"}/>
        <CourseCard img={css} />
      </div>
    </div>
  );
};

export default Course;
