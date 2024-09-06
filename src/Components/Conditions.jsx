import { Select, InputNumber } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import SelectdropDown from "./SelectdropDown";
import {
  addconditonsvalues,
  deleteconditions,
} from "../Store/group&conditionSlice";
import { useDispatch } from "react-redux";
const Conditions = ({ id, ele, index }) => {
  const [manipuldateFormele, setManipuldateFormele] = useState(false);
  const dispatch = useDispatch();
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
      value: "!=",
      label: "!=",
    },
    {
      value: "IN",
      label: "IN",
    },
    {
      value: "NOT IN",
      label: "NOT IN",
    },
  ];
  const options3 = [
    {
      value: "=",
      label: "=",
    },
    {
      value: "!=",
      label: "!=",
    },
    {
      value: "AND",
      label: "AND",
    },
    {
      value: "OR",
      label: "OR",
    },
    {
      value: "<",
      label: "<",
    },
    {
      value: "<=",
      label: "<=",
    },
    {
      value: ">",
      label: ">",
    },
    {
      value: ">=",
      label: ">=",
    },
    {
      value: "IN",
      label: "IN",
    },
    {
      value: "NOT IN",
      label: "NOT IN",
    },
    {
      value: "Between",
      label: "Not Between",
    },
  ];
  const stateOptions = [
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "M.P",
      label: "M.P",
    },
    {
      value: "U.P",
      label: "U.P",
    },
  ];
  const handleconditionData = (Value) => {
    if (Value === "State") {
      setManipuldateFormele(true);
    } else if (Value === "Population" || Value === "Area") {
      setManipuldateFormele(false);
    }
    dispatch(
      addconditonsvalues({ id: id, key: "optionsValue1", value: Value })
    );
  };
  return (
    <div className="flex flex-col justify-start gap-2 p-2">
      {
        index>0?(
        <SelectdropDown id={id} ele={ele}/>
        ):null
      }
      <div className="w-full flex items-center justify-between gap-2">
      <div className="flex w-full gap-2 bg-[#FAF5FF] p-2 rounded-md border-2">
        <Select
          className="w-full text-left"
          options={options1}
          value={ele.optionsValue1}
          onChange={handleconditionData}
        />
        <Select
          className="w-full text-left"
          options={manipuldateFormele ? options2 : options3}
          value={ele.optionsValue2}
          onChange={(Value) => {
            dispatch(
              addconditonsvalues({ id: id, key: "optionsValue2", value: Value })
            );
          }}
        />
        {manipuldateFormele ? (
          <Select
            className="w-full text-left"
            options={stateOptions}
            value={ele.optionSelectorInput}
            onChange={(Value) => {
              dispatch(
                addconditonsvalues({
                  id: id,
                  key: "optionSelectorInput",
                  value: Value,
                })
              );
            }}
          />
        ) : (
          <InputNumber
            className="w-full"
            value={ele.optionSelectorInput}
            onChange={(Value) => {
              dispatch(
                addconditonsvalues({
                  id: id,
                  key: "optionSelectorInput",
                  value: Value,
                })
              );
            }}
          />
        )}
      </div>
      <MdDelete
        className="text-red-400 text-lg"
        onClick={() => {
          dispatch(deleteconditions({ id: id }));
        }}
      />
    </div>
    </div>
  );
};

export default Conditions;
