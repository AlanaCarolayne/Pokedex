import "./header_PI.css";
import {
  IoMdArrowBack,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header_Pokemon_Info = ({name, id}) => {
  const navigate = useNavigate();
  return (
    <header className="header-PI">
      <div className="pokemon-header">
        <button className="btn-back" onClick={() => navigate(-1)} >
          <IoMdArrowBack />
        </button>
        <h1>{name.toUpperCase()} </h1>
        <h3>#{id}</h3>
        </div>
        <div className="next-previous-btn">
          <button>
            <IoIosArrowBack />
          </button>
          <button>
            <IoIosArrowForward />
          </button>
        </div>
    </header>
  );
};

export default Header_Pokemon_Info;
