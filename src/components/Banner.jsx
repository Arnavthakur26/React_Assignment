import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="h-[200px] sm:h-[400px] sm:text-lg text-md w-full inline-block rounded-lg align-top text-center from-[#22293e] to-[#2e3f56c0] bg-gradient-to-t   slide">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div>{banner.text}</div>
        {banner.button && (
          <button
            type="button"
            className="inline-block rounded  text-xs mt-4 bg-blue-600 px-6 pb-2 pt-2  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  ]"
          >
            {banner.btn_name}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
