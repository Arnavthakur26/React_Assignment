import React, { useState } from "react";
import { Box, CardActions } from "@mui/material";
import Card from "./Card";

const Section = ({ section, cards }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="flex justify-between mb-8 mt-8">
        <h4 className="sm:text-3xl font-bold text-lg ">{section.title}</h4>

        {cards.length > 3 && (
          <div
            className="bg-[#404593] hover:bg-[#353978]  sm:text-sm text-xs  rounded-lg sm:w-20 w-16 flex items-center justify-center cursor-pointer transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </div>
        )}
      </div>
      <div className="flex flex-auto flex-wrap justify-center gap-8 ">
        {/* Show first 3 cards by default */}
        {cards.slice(0, showAll ? cards.length : 3).map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>

      {/* Show all cards button */}
    </div>
  );
};

export default Section;
