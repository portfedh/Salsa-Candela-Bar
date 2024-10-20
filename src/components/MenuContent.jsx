import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import menuData from "../utils/menuData";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuContent = ({ scrollToTop }) => (
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
                drinkId={item.drinkId}
                itemName={item.itemName}
                unitPrice={item.unitPrice}
                volume={item.volume}
                imageUrl={item.imageUrl}
                available={item.available}
              />
            ))}
        </div>
      </div>
    ))}
  </div>
);

MenuContent.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default MenuContent;
