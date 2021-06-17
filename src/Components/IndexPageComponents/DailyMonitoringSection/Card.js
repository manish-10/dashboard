import React from "react";

const Card = ({ cardDetails }) => {
  return (
    <div>
      <pre>{JSON.stringify(cardDetails, null, 2)}</pre>
      <div
        id="icon-bg"
        className={`bg-${cardDetails.color} bg-opacity-30 p-2 rounded-full bg-clip-padding`}
      >
        {cardDetails.icon}
      </div>
    </div>
  );
};

export { Card };
