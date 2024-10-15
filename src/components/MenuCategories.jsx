import PropTypes from "prop-types";

const categories = [
  { id: "aguas-section", label: "Aguas $20" },
  { id: "jugos-section", label: "Jugos $30" },
  { id: "refrescos-section", label: "Refrescos $30" },
  { id: "cervezas-section", label: "Cervezas $50" },
  { id: "vodka-section", label: "Vodka $100" },
  { id: "ron-section", label: "Ron $100" },
  { id: "tequila-section", label: "Tequila $100" },
  { id: "whiskey-section", label: "Whiskey $100" },
  { id: "mocteles-section", label: "Mocteles $50" },
  { id: "botanas-section", label: "Botanas $20" },
];

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
