import { Select, InputNumber } from "antd";
import { MdDelete } from "react-icons/md";
const Conditions = () => {
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
    <div className="w-full p-2 flex items-center justify-between gap-2">
      <div className="flex w-full gap-2 bg-[#FAF5FF] p-2 rounded-md border-2">
        <Select className="w-full text-left" options={options1} />
        <Select className="w-full text-left" options={options2} />
        <InputNumber className="w-full" />
      </div>
      <MdDelete className="text-red-400 text-lg" />
    </div>
  );
};

export default Conditions;
