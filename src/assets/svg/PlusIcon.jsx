import React from "react";

export const PlusIcon = () => {
  return (
    <>
      <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_215_1529)">
          <rect
            x={12}
            y={5}
            width={2}
            height={12}
            rx={1}
            transform="rotate(90 12 5)"
            fill="#8DE2C6"
          />
          <rect x={5} width={2} height={12} rx={1} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_215_1529">
            <rect width={12} height={12} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
