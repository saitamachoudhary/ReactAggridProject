import { useState } from "react";
import { Select } from "antd";

const AssignedTo = ({ sendDatatoParent }) => {
  // const [, setOptionValue] = useState("");
  const [addOption, setAddOption] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

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

  const options2 = [
    {
      label: "abcd",
      value: "abcd",
    },
    {
      label: "efgh",
      value: "efgh",
    },
    {
      label: "ijkl",
      value: "ijkl",
    },
  ];

  const handleSearch = (input) => {
    if (input.startsWith("@")) {
      setAddOption(options);
    } else if (input.startsWith("#")) {
      setAddOption(options2);
    } else {
      setAddOption([]);
    }
  };

  const handleChange = (values) => {
    setSelectedValues(values);
    sendDatatoParent({ assignedTo: values });
    // setOptionValue(values);
  };

  return (
    <div className="Parent">
      <p className="text-black text-[1.1rem]">
        Enter @ for users and # for groups
      </p>
      <Select
        mode="multiple"
        className="w-full"
        placeholder="Select users & groups"
        onSearch={handleSearch}
        onChange={handleChange}
        options={addOption} 
        showSearch
        value={selectedValues} 
        filterOption={false}
      />
    </div>
  );
};

export default AssignedTo;
