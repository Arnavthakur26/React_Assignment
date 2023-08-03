import React from "react";

const Card = ({ card }) => {
  const getDisplayData = () => {
    switch (card.data_type) {
      case "text":
        return <p className="m-4">{card.data_value}</p>;
      case "number":
        return <h3 className="m-4">{card.data_value}</h3>;
      case "progress":
        return (
          <div className="w-[80%] bg-gray-200 m-4 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${card.data_value}%` }}
            >
              {card.data_value}
            </div>
          </div>
        );
      case "tags":
        return card.data_value.map((tag, index) => (
          <div
            key={index}
            className="center relative inline-block select-none m-4 rounded-lg bg-[#404593] py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
          >
            {card.data_value}
          </div>
        ));
      case "image":
        return <img src={card.data_value} className="m-1.5" />;
      default:
        return card.data_value;
    }
  };
  return (
    <div
      key={card.id}
      className="w-[300px] overflow-x-hidden h-[300px] max-h-[300px] bg-[#222a3f]  flex flex-col justify-between overflow-auto scroll-m-5 rounded-lg shadow-md"
    >
      <div>
        <div className="flex">
          <h2 className="text-xl font-medium w-full p-4">{card.card_title}</h2>
          <div className="center relative inline-block select-none m-4 rounded-lg shadow from-[#151a2d] to-[#222a3f] bg-gradient-to-tr py-2 px-3.5 align-baseline font-sans text-xs font-bold capitalize leading-none text-white">
            {card.data_type ? card.data_type : "General"}
          </div>
        </div>
        {/* Display data if present */}
        {/* {card.data && <div className="p-3">{card.data_value}</div>} */}
        {card.data && getDisplayData()}
      </div>

      <div className="justify-center flex">
        {card.button && (
          <button
            type="button"
            className="inline-block rounded mt-4 mb-4 bg-blue-600 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  ]"
          >
            {card.button_name}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
