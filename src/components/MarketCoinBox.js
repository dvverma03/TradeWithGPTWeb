import React from 'react';

const MarketCoinBox = ({ image, symbol, current_price, id, isActive }) => {
  return (
    <div className={`h-16 my-1 items-center justify-center rounded-[5px] pt-2 ${isActive ? 'bg-violet-600' : ''}`}>
      <div className="flex justify-between">
        <div className="flex pl-2 h-full items-center">
          <img
            src={image}
            className="w-[35px] h-[35px] mr-2"
            alt="Logo"
          />
          <div>
            <div>{symbol.toUpperCase()}</div>
            <div>{id}</div>
          </div>
        </div>
        <div className="pr-4 h-full items-center text-center">${current_price}</div>
      </div>
    </div>
  );
};

export default MarketCoinBox;
