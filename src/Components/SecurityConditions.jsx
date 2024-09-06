import { Button } from "antd";
import { useState } from "react";
import Group from "./Group";
import { useDispatch, useSelector } from "react-redux";
import { addgroups} from "../Store/group&conditionSlice";

const SecurityConditions = () => {
  const dispatch = useDispatch();
  const components = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const addGroup = () => {
    dispatch(addgroups());
  };

  return (
    <div className="Parent overflow-auto">
      <div className="header flex justify-between mb-2">
        <h2 className="text-lg text-black">Security conditions</h2>
        <div className="flex gap-3">
          <Button onClick={addGroup}>+Group</Button>
        </div>
      </div>
      <div className="content text-center">
        {components.length === 0 ? (
          <h2 className="text-lg">
            Please click on Groups or Conditions or Expression button to create
            your filters.
          </h2>
        ) : (
          components.map((component,index) => {
            const { type, id } = component;
            if (type === "group") {
              return <Group key={id} id={id} index={index}/>
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default SecurityConditions;
