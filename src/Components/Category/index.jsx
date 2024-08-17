import "./category.css";

const Category = ({ type, type02, color }) => {
  return (
    <div className="category-div">
      <h4 style={{color: color}}>{type.toUpperCase()}</h4>
      {type02 !== ''? <h4 style={{color: color}}>{type02.toUpperCase()}</h4> : ''}
    </div>
  );
};

export default Category;
