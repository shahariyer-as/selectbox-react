import React from "react";
import useStore from "../../hooks/useStore";

const MyData = () => {
  const [selectors, setSelectors] = useStore();
  const deleteData = (name) => {
    const filterS = selectors.filter((element, index) => {
      return element.name !== name;
    });
    setSelectors(filterS);
  };
  return (
    <div className="mt-5">
      {selectors.length < 1 && (
        <div className="text-danger">No submit yet. Please submit</div>
      )}
      <h3 className="text-danger">Total submit {selectors.length}</h3>

      <div className="view-container">
        {selectors.length > 0 && (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Select Item</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (selectors.map = (s, index) => (
                      <tr key={index}>
                        <td>{s.name}</td>
                        <td>{s.select}</td>
                        <td
                          className="delete-btn"
                          onClick={() => deleteData(s.name)}
                        >
                          x
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyData;
