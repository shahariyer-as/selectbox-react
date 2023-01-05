import React from "react";

const ShowData = ({ selectors, deleteData }) => {
  return (selectors.map = (s, index) => (
    <tr key={index}>
      <td>{s.name}</td>
      <td>{s.select}</td>
      <td className="delete-btn" onClick={() => deleteData(s.name)}>
        x
      </td>
    </tr>
  ));
};

export default ShowData;
