import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "antd";
import Conditions from "./Conditions";
const Group = () => {
  const [AddConditions, setAddConditions] = useState([{}]);
  const addConditions = () => {
    setAddConditions((prev) => [...prev, {}]);
  };
  return (
    <div className="GroupParent w-full border-2">
      <div className="flex gap-2 justify-end p-2 items-center">
        <Button type="primary" onClick={addConditions}>
          +Conditions
        </Button>
        <IoMdClose className="text-lg" />
      </div>
      {/* <div className="w-full p-2 flex items-center justify-between gap-2">
        <div className="flex w-full gap-2 bg-[#FAF5FF] p-2 rounded-md border-2">
          <Select className="w-full text-left" options={options1} />
          <Select className="w-full text-left" options={options2} />
          <InputNumber className="w-full" />
        </div>
        <MdDelete className="text-red-400 text-lg" />
      </div> */}
      {/* <Conditions/> */}
      {AddConditions.map((_, index) => (
        <Conditions key={index}/>
      ))}
    </div>
  );
};

export default Group;
