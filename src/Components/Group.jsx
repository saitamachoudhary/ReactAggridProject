// import React from 'react';
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { Button, Select, InputNumber } from "antd";
const Group = () => {
  const options1 = [
    {
      value: "State",
      label: "State",
    },
    {
      value: "Population",
      label: "Population",
    },
    {
      value: "Area",
      label: "Area",
    },
  ];
  const options2 = [
    {
      value: "=",
      label: "=",
    },
    {
      value: "And",
      label: "And",
    },
    {
      value: "Or",
      label: "Or",
    },
  ];
  return (
    <div className="GroupParent w-full border-2">
      <div className="flex gap-2 justify-end p-2 items-center">
        <Button type="primary">+Conditions</Button>
        <IoMdClose className="text-lg" />
      </div>
      <div className="w-full p-2 flex items-center justify-between gap-2">
        <div className="flex w-full gap-2 bg-[#FAF5FF] p-2 rounded-md border-2">
          <Select className="w-full text-left" options={options1} />
          <Select className="w-full text-left" options={options2} />
          <InputNumber className="w-full" />
        </div>
        <MdDelete className="text-red-400 text-lg" />
      </div>
    </div>
  );
};

export default Group;
