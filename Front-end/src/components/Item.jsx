import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src=""
        alt="imgaem da acomodaçao"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">cidade, Estado </h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 500,00</span> por noite
      </p>
    </a>
  );
};

export default Item;
