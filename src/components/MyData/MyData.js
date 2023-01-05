import React from "react";
import useStore from "../../hooks/useStore";

const MyData = () => {
  const [selectors] = useStore();
  return (
    <div className="mt-5">
      {selectors.length < 1 && (
        <div className="text-danger">No submit yet. Please submit</div>
      )}
      <h3 className="text-danger">Total submit {selectors.length}</h3>
      {(selectors.map = (m) => console.log(m))}
    </div>
  );
};

export default MyData;
