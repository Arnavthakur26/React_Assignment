import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import Banner from "./components/banner";
import Section from "./components/section";

const App = ({ banner_array, section_array, card_array }) => {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === banner_array.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <Box sx={{ p: 4 }}>
      {/* Banners */}
      <div className="overflow-hidden m-auto w-full rounded-lg slideshow">
        <div
          className="m-auto relative mb-4  w-full transition-transform duration-1000 whitespace-nowrap slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {banner_array.map((banner) => (
            <Banner key={banner.id} banner={banner} />
          ))}
        </div>
        <div className="slideshowDots relative text-center ">
          {banner_array.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot ${
                index === idx ? "bg-blue-600" : "bg-gray-200"
              }  h-3 w-3 rounded-full transition-colors duration-500 inline-block cursor-pointer mr-2`}
            ></div>
          ))}
        </div>
      </div>

      {/* Sections */}
      {section_array.map((section) => (
        <Section
          key={section.id}
          section={section}
          cards={card_array.filter((c) => c.parent_sec === section.id)}
        />
      ))}
    </Box>
  );
};

export default App;
