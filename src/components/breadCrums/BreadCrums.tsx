import React from "react";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";

const items = [
  { title: "Home", to: "/" },
  { title: "Main Menu", to: "/" },
  { title: "Pig On Stick", to: "/singer-product" },
].map((item, index) => (
  <Link to={item.to} key={index}>
    {item.title}
  </Link>
));

export const BreadCrums: React.FC = () => {
  return (
    <div className="uppercase font-semibold">
      <Breadcrumbs separator=">" mt="xs">
        {items}
      </Breadcrumbs>
    </div>
  );
};
