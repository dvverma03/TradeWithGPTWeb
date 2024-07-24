import React, { useEffect, useState } from "react";
import fetchCoins from "./fetchCoins";
import MarketCoinBox from "./MarketCoinBox";
import { useDispatch } from "react-redux";
import { addCoin } from "./store/coinSlice";

const MarketSideBar = ({ page }) => {
  const [coins, setCoins] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch= useDispatch();

  if(coins?.length>0){
    dispatch(addCoin(coins[activeIndex]));
  }

  useEffect(() => {
    const fetchData = async () => {
      const coins = await fetchCoins();
      setCoins(coins);
    };
    fetchData();
  }, []);

  const handleCoinClick = (index) => {
    setActiveIndex(index); // Set the active index to the clicked coin
  };

  return (
    <aside className="w-full h-full bg-[#101828] p-5">
      <div className="flex items-center mb-5">
        <div className="text-2xl font-bold bg-violet-600 p-2 rounded-sm">
          Up
        </div>
        <div className="ml-auto text-sm text-gray-400">32</div>
      </div>
      <section>
        <div>Market</div>
        <input
          type="text"
          placeholder="Search your coin"
          className="bg-gray-600 w-full h-[45px] rounded-[5px] pl-4 mt-4 mb-4"
        />
        <div className="h-[750px] overflow-y-scroll no-scrollbar">
          {coins?.length > 0 &&
            coins?.map((coin, index) => (
                <div onClick={() => handleCoinClick(index)} className="cursor-pointer">
                    <MarketCoinBox
                      key={index}
                      index={index}
                      activeIndex={activeIndex}
                      isActive={activeIndex === index} // Pass isActive prop to determine if this box is active
                      {...coin}
                    />
                </div>
            ))}
        </div>
      </section>
    </aside>
  );
};

export default MarketSideBar;
