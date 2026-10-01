import React, { useState } from "react";
import "./HeroBanner.css";

import Rak from "../assets/Rak.jpg";
import Cycle from "../assets/Cycle.jpg";
import Mens from "../assets/Mens.jpg";
import Toys from "../assets/Toys.jpg";

import Phone1 from "../assets/Phone1.jpg";
import Phone2 from "../assets/Phone2.jpg";
import Phone3 from "../assets/Phone3.jpg";
import Phone4 from "../assets/Phone4.jpg";

import Shoe1 from "../assets/Shoe1.jpg";
import Shoe2 from "../assets/Shoe2.jpg";
import Shoe3 from "../assets/Shoe3.jpg";
import Shoe4 from "../assets/Shoe4.jpg";
import Shoe5 from "../assets/Shoe5.jpg";
import Shoe7 from "../assets/Shoe7.jpg";
import Shoe9 from "../assets/Shoe9.jpg";

import Hand2 from "../assets/HAnd2.jpg";
import HandBAg from "../assets/HandBAg.jpg";

import Sleep1 from "../assets/Sleep1.jpg";
import Sleep2 from "../assets/Sleep2.jpg";
import Sleep4 from "../assets/Sleep4.jpg";
import Sleep6 from "../assets/Sleep6.jpg";

import Micro from "../assets/Micro.jpg";
import Refri from "../assets/Refri.jpg";
import Washing from "../assets/Washing.jpg";
import Air1 from "../assets/Air1.jpg";

import SubProduct from "./SubProduct";

function Hero() {
  const image = [Rak, Cycle, Mens, Toys];

  const [curr, setCurr] = useState(0);

  const nextImage = () => {  
    setCurr((curr + 1) % image.length);
  };

  const prevImage = () => {
    setCurr((curr - 1 + image.length) % image.length);
  };

  return (
    <div className="HeroBanner">

      {/* Hero Image */}
      <div className="HeroImg">
        <img src={image[curr]} alt="Banner" />

        <button className="next" onClick={nextImage}>
          <i className="fa-solid fa-forward"></i>
        </button>

        <button className="prev" onClick={prevImage}>
          <i className="fa-solid fa-backward"></i>
        </button>
      </div>

      {/* Products */}
      <div className="products-container">

        <SubProduct
          title="Pick up where you left off"
          images={[
            { img: Phone1, name: "Poco C85 5G Mystic Purple" },
            { img: Phone2, name: "AI+ Nova 2 Pro 5G" },
            { img: Phone3, name: "Poco C85 5G Spring Green" },
            { img: Phone4, name: "POCO M4 Pro" }
          ]}
        />

        <SubProduct
          title="Continue Shopping"
          images={[
            { img: Shoe1, name: "Running Shoes" },
            { img: Shoe2, name: "Sports Shoes" },
            { img: Shoe3, name: "Casual Shoes" },
            { img: Shoe4, name: "Walking Shoes" }
          ]}
        />

        <SubProduct
          title="Pick up where you left off"
          images={[
            { img: Shoe3, name: "Casual Shoes" },
            { img: Shoe4, name: "Walking Shoes" },
            { img: Shoe5, name: "Sneakers" },
            { img: Shoe7, name: "Sports Shoes" }
          ]}
        />

        <SubProduct
          title="Up to 60% off | Footwear & Handbags"
          images={[
            { img: Shoe7, name: "Sports Shoes" },
            { img: Shoe9, name: "Sneakers" },
            { img: Hand2, name: "Hand Bag" },
            { img: HandBAg, name: "Ladies Hand Bag" }
          ]}
        />

        <SubProduct
          title="Up to 60% off | Furniture & Mattresses"
          images={[
            { img: Sleep1, name: "Mattress" },
            { img: Sleep2, name: "Bed" },
            { img: Sleep4, name: "Pillow" },
            { img: Sleep6, name: "Sofa" }
          ]}
        />

        <SubProduct
          title="Appliances for your home | Up to 55% off"
          images={[
            { img: Air1, name: "Air Conditioner" },
            { img: Micro, name: "Microwave" },
            { img: Refri, name: "Refrigerator" },
            { img: Washing, name: "Washing Machine" }
          ]}
        />

      </div>
    </div>
  );
}

export default Hero;