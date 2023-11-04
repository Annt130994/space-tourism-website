import React, { useState, useEffect } from "react";
import "./NavbarStyle.scss";

interface DataNavbar {
  id: string;
  title: string;
  link: string;
}

const itemNavbar: DataNavbar[] = [
  {
    id: "00",
    title: "Home",
    link: "/",
  },
  {
    id: "01",
    title: "Destination",
    link: "/destination",
  },
  {
    id: "02",
    title: "Crew",
    link: "/crew",
  },
  {
    id: "03",
    title: "Technology",
    link: "/technology",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(localStorage.getItem("active") || "00");

  const handleItemClick = (item: string) => {
    console.log("Item clicked:", item);
    setActive(item);
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
        {itemNavbar.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={
              active === item.id ? "active subHeading3" : "subHeading3"
            }
            onClick={() => handleItemClick(item.id)}
          >
            <li>
              <span>{item.id}</span>
              <span className="content">{item.title}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
