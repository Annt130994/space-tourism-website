import React from "react";
import ButtonLarge from "../../features/ButtonLarge";
import "./HomeStyle.scss";

interface HomeProps {
  itemId: string;
  onItemClick: (itemId: string) => void;
}

const Home: React.FC<HomeProps> = ({ itemId, onItemClick }) => {
  const handleClick = (newItemId: string) => {
    onItemClick(newItemId);
  };
  return (
    <>
      <div className={itemId === "00" ? "body-content" : "hide"}>
        <div className="box-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <div className="bodyText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <ButtonLarge onItemClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
