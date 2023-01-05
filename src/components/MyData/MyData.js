import React from "react";
import useStore from "../../hooks/useStore";

const MyData = () => {
  const [selectors] = useStore();
  return (
    <div>
      <h2>DEta store loca{selectors.length}</h2>
      {(selectors.map = (m) => console.log(m))}
    </div>
  );
};

export default MyData;
