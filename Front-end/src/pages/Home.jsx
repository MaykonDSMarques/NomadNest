import React from "react";
import Item from "../components/Item";

const Home = () => {
  return (
    <section>
      <div className="max-w-7x1 mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
