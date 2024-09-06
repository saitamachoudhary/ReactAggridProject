import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDropdownValue } from "../Store/group&conditionSlice";
const SelectdropDown = ({ id, ele}) => {
  const dispatch = useDispatch();
  let finalValue;
  const value = useSelector((state) =>
    state.groupConditon.groupconditions.find((ele) => ele.id === id)
  );
  if (value) {
    finalValue = value.groupDropdownValue;
  } else if(ele&&ele.conditionDropdownValue) {
    finalValue=ele.conditionDropdownValue; 
  }
  return (
    <Select
      className="w-20"
      defaultValue={finalValue || "AND"}
      onChange={(Value) => {
        dispatch(addDropdownValue({ id: id, value: Value }));
      }}
      options={[
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
      ]}
    />
  );
};

export default SelectdropDown;
