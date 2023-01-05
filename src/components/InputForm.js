import React, { useState } from "react";
import { useForm } from "react-hook-form";

const InputForm = () => {
  const [checkbox, setCheckbox] = useState(false);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 mx-auto w-25">
          <label className="form-label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Your Name"
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

        <div className="mb-3 mx-auto w-25">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} className=" form-control">
            <option value="">on oafs</option>
            {/* {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))} */}
          </select>
        </div>
        <div className="mb-3 mx-auto w-25">
          <input
            {...register("checkbox")}
            type="checkbox"
            value="accepts"
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <label className="form-label">
            <span className="label-text p-2"> Agree to terms</span>
          </label>
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-danger">
                {errors.checkbox?.message}
              </span>
            )}
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
