/* eslint-disable react/prop-types */



const CourseCard = ({ img }) => {
  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <img src={img} alt="course" className="w-full h-48 object-cover rounded-lg" />
    </div>
  )
}

export default CourseCard;
