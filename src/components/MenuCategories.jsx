import PropTypes from "prop-types";
import categories from "../utils/categories";

const MenuCategories = ({ scrollToSection }) => (
  <div className="menu-categories">
    {categories.map((category) => (
      <button
        key={category.id}
        className="category-button"
        onClick={() => scrollToSection(category.id)}
      >
        {category.label}
      </button>
    ))}
  </div>
);

MenuCategories.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default MenuCategories;
