import React, { useEffect } from "react";

const TradingViewWidget = ({ width, height }) => {
  useEffect(() => {
    if (width > 0) {
      const widgetContainer = document.getElementById("tradingview-widget");
      widgetContainer.innerHTML = "";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: width,
        height: height,
        colorTheme: "dark",
        locale: "en",
      });
      widgetContainer.appendChild(script);
    }
  }, [width, height]);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
