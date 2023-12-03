import React from "react";
import ItemNavbar from "../../data/itemNavbar";
import "./NavbarStyle.scss";

interface DataProps {
  itemId: string;
  onClick: (itemId: string) => void;
}

const Navbar: React.FC<DataProps> = ({itemId, onClick}) => {
  return (
    <div className="navbar">
      <ul>
        {ItemNavbar.map((item) => (
          <li
            key={item.id}
            className={
              itemId === item.id ? "active subHeading3" : "subHeading3"
            }
            onClick={() => onClick(item.id)}
          >
            <span className="number">{item.id}</span>
            <span className="content">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
