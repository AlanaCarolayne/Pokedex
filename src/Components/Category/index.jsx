import "./category.css";

const Category = ({ type, type02 }) => {
  return (
    <div className="category-div">
      <button href="#">{type}</button>
      <button href="#">{type02}</button>
    </div>
  );
};

export default Category;
