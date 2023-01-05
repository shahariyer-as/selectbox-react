import React from "react";
import { useForm } from "react-hook-form";

const InputForm = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <div
        name="select"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default InputForm;
