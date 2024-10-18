import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import menuData from "../utils/menuData";

const MenuContent = ({ scrollToTop, addToCart }) => (
  <div className="menu-content">
    {Object.keys(menuData).map((section) => (
      <div key={section} className="menu-section">
        <h2 id={`${section}-section`} className="menu-title">
          {section.charAt(0).toUpperCase() + section.slice(1)}
          <a href="#" onClick={scrollToTop} className="scroll-to-top-icon">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </h2>
        <div className="menu-items">
          {menuData[section]
            .filter((item) => item.available)
            .map((item, index) => (
              <MenuItem
                key={index}
                id={item.id}
                itemName={item.itemName}
                price={item.price}
                amount={item.amount}
                imageUrl={item.imageUrl}
                available={item.available}
                onAddToCart={addToCart}
              />
            ))}
        </div>
      </div>
    ))}
  </div>
);

MenuContent.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MenuContent;
