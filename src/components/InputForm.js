import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useGetAllSelectors from "../hooks/useGetAllSelectors";

const InputForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [selectors, setSelectors] = useGetAllSelectors();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 mx-auto w-50">
          <label className="form-label">
            <span className="label-text"> Your Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            className=" form-control"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-danger">
                {errors.name?.message}
              </span>
            )}
          </label>
        </div>

        <div className="mb-3 mx-auto w-50">
          <label className="label">
            <span className="label-text">Selectors</span>
          </label>
          <select
            multiple
            {...register("selectors", {
              required: {
                value: true,
                message: "selectors is Required",
              },
            })}
            className=" form-select"
            aria-label=" select example"
          >
            {selectors.map((s) => (
              <option key={s._id} value={s.selector}>
                {s.selector}
              </option>
            ))}
          </select>
          <label className="label">
            {errors.selectors?.type === "required" && (
              <span className="label-text-alt text-danger">
                {errors.selectors?.message}
              </span>
            )}
          </label>
        </div>
        <div className="mb-3 mx-auto w-50">
          <input
            {...register("terms")}
            type="checkbox"
            value="accepts"
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <label className="form-label">
            <span className="label-text p-2"> Agree to terms</span>
          </label>
        </div>
        <input
          className="d-flex justify-content-center btn btn-primary mx-auto w-25"
          type="submit"
          value="Save"
          disabled={!checkbox}
        />
      </form>
    </div>
  );
};

export default InputForm;
