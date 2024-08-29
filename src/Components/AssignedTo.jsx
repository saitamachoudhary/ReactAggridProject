import { Select } from "antd";
const AssignedTo = () => {
  const options = [
    {
      label: "@gmail.com",
      value: "@gmail.com",
    },
    {
      label: "@hotmail.com",
      value: "@hotmail.com",
    },
    {
      label: "@outlook.com",
      value: "@outlook.com",
    },
  ];
  return (
    <div className="Parent">
      <p className="text-black text-[1.1rem]">
        Enter @ for users and # for groups
      </p>
      <Select
        mode="multiple"
        className="w-full"
        placeholder="select users & groups only"
        options={options}
      />
    </div>
  );
};

export default AssignedTo;
