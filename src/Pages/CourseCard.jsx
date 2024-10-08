/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ img, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
    >
      <img src={img} alt="course" className="w-full h-48 object-cover rounded-lg" />
    </div>
  );
};

export default CourseCard;
