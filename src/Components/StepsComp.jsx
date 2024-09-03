import { useState,useEffect} from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Steps, theme } from "antd";
import AddRole from "./AddRole";
import SecurityConditions from "./SecurityConditions";
import AssignedTo from "./AssignedTo";
import { useDispatch, useSelector } from "react-redux";
import { addGrid } from "../Store/slice";
import { makegroupconditionsEmpty } from "../Store/group&conditionSlice";
const StepsComp = ({closeModal}) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const securityConditions = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const [gridVal, setGridVal] = useState({
    Rolename: "",
    Roletype: "",
    Condition: "EditorView",
    Assignedto: [],
    Actions: "Delete",
    SecurityConditions:[],
    _id: nanoid(),
  });
  useEffect(()=>{
    if(gridVal.SecurityConditions.length>0){
      dispatch(addGrid(gridVal));
    }
  },[gridVal,dispatch])
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const contentStyle = {
    // lineHeight: "260px",
    // textAlign: "center",
    padding: "10px",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const handleDatafromChild = (newData) => {
    if (newData.role && newData.roleType) {
      setGridVal((prev) => ({
        ...prev,
        Rolename: newData.role,
        Roletype: newData.roleType,
      }));
    } else if (newData.assignedTo) {
      setGridVal((prev) => ({ ...prev, Assignedto: newData.assignedTo }));
    } else {
      setGridVal({
        _id: nanoid(),
        Rolename: "",
        Roletype: "",
        Condition: "EditorView",
        Assignedto: [],
        Actions: "Delete",
        SecurityConditions: [],
      });
    }
  };
  const steps = [
    {
      title: "Add Role",
      content: (
        <AddRole
          sendDatatoParent={handleDatafromChild}
          sendDatatochild={gridVal}
        />
      ),
    },
    {
      title: "Security Conditions",
      content: <SecurityConditions sendDatatoParent={handleDatafromChild} />,
    },
    {
      title: "Assigned To",
      content: <AssignedTo sendDatatoParent={handleDatafromChild} />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: current > 0 ? "space-between" : "flex-end",
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
              textAlign: "left",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
            setGridVal((Prev) => ({
                ...Prev,
                SecurityConditions: securityConditions,
              }));
              dispatch(makegroupconditionsEmpty());
              closeModal();
            }}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};
export default StepsComp;
