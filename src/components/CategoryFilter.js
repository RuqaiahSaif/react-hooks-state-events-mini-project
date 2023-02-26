import React from "react";

function CategoryFilter({ CATEGORIES, selectCategories, onSelectcategories }) {
  
   
  const categoryButtons = CATEGORIES.map((category) => {
    const className = category === selectCategories ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectcategories(category)} >

        {category}
      </button>
    );
  });



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}
export default CategoryFilter;
