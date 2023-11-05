import React, { useState, useEffect } from "react";
import ItemNavbar from "../../data/itemNavbar";
import "./NavbarStyle.scss";

interface DataProps {
  onItemClick: (itemId: string) => void;
}

const Navbar = (props: DataProps) => {
  const [active, setActive] = useState(localStorage.getItem("active") || "00");

  const handleItemClick = (item: string) => {
    console.log("Item clicked:", item);
    setActive(item);
    props.onItemClick(item);
    localStorage.setItem("active", item);
    console.log("active:", active);
  };

  useEffect(() => {
    const savedActive = localStorage.getItem("active");
    if (savedActive) {
      setActive(savedActive);
    }
  }, []);

  return (
    <div className="navbar">
      <ul>
        {ItemNavbar.map((item) => (
          <li
            key={item.id}
            className={
              active === item.id ? "active subHeading3" : "subHeading3"
            }
            onClick={() => handleItemClick(item.id)}
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
