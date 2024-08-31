import { useState } from "react";
import { Button } from "antd";
import Group from "./Group";
import Conditions from "./Conditions";

const SecurityConditions = () => {
  const [Components, setComponents] = useState([]);
  const addConditions = () => {
    setComponents((prev) => [...prev, <Conditions key={prev.length} />]);
  };
  const addGroup = () => {
    setComponents((prev) => [...prev, <Group key={prev.length} />]);
  };
  return (
    <div className="Parent overflow-auto">
      <div className="header flex justify-between mb-2">
        <h2 className="text-lg text-black">Security conditions</h2>
        <div className="flex gap-3">
          <Button
            onClick={() => {
              addGroup("Group");
            }}
          >
            +Group
          </Button>
          <Button onClick={addConditions}>+Conditions</Button>
        </div>
      </div>
      <div className="content text-center">
        {Components.length === 0 ? (
          <h2 className="text-lg">
            Please click on Groups or Conditions or Expression button to create
            your filters.
          </h2>
        ) : (
          Components
        )}
      </div>
    </div>
  );
};

export default SecurityConditions;
