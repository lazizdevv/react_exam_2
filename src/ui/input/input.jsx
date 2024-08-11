import React from "react";

export const Input = ({
  register,
  name,
  className,
  type = "text",
  placeholder = "",
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="">
      <input
        {...register(name)}
        {...rest}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} w-full px-4 py-2 border rounded-lg focus:outline-primary`}
      />
    </div>
  );
};
