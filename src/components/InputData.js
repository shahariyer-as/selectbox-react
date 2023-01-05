import React, { useEffect, useState } from "react";
import useGetAllSelectors from "../hooks/useGetAllSelectors";
import useStore from "../hooks/useStore";

const InputData = () => {
  const [selectors, setSelectors] = useStore();
  const [checkbox, setCheckbox] = useState(false);
  const [inputSelect] = useGetAllSelectors();
  // input field states
  const [name, setName] = useState("");
  const [selects, setSelects] = useState("");

  // form submit event
  const handleSelectorSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let data = {
      name,
      selects,
    };

    setSelectors([...selectors, data]);
    window.alert("submitted");
    this.setState({
      data: "",
    });
    setName("");
    setSelects("");
    setCheckbox(false);
  };

  // saving data to local storage
  useEffect(() => {
    sessionStorage.setItem("input-selector", JSON.stringify(selectors));
  }, [selectors]);

  return (
    <div>
      <h2 className="mt-5 mb-3 text-danger">Submit Form First</h2>
      <form
        autoComplete=""
        className="form-group"
        onSubmit={handleSelectorSubmit}
      >
        <div className=" mx-auto w-50">
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-2 mx-auto w-75"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="mt-3 mx-auto w-50 ">
          <label className="label">
            <span className="label-text">Select Items</span>
          </label>
          <select
            multiple
            required
            onChange={(e) => setSelects(e.target.slot.value)}
            className="mt-3 form-select mx-auto w-75"
            aria-label=" select example"
          >
            {inputSelect.map((s) => (
              <option key={s._id} value={s.selector}>
                {s.selector}
              </option>
            ))}
          </select>
          <label className="label"></label>
        </div>
        <div className="mb-3 mx-auto w-50 ">
          <input
            type="checkbox"
            value="accepts"
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <label className="form-label">
            <span className="text-danger  p-2">
              Agree to terms and conditions ?
            </span>
          </label>
        </div>
        <input
          className="d-flex bg-danger justify-content-center btn btn-primary mx-auto w-25"
          type="submit"
          value="Save"
          disabled={!checkbox}
        />
      </form>
    </div>
  );
};

export default InputData;
