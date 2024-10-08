import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Steps, theme, notification } from "antd";
import AddRole from "./AddRole";
import SecurityConditions from "./SecurityConditions";
import AssignedTo from "./AssignedTo";
import { useDispatch, useSelector } from "react-redux";
import { addGrid } from "../Store/slice";
import { makegroupconditionsEmpty } from "../Store/group&conditionSlice";
const StepsComp = ({ closeModal }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [validateCheck, setValidateCheck] = useState(false);
  const dispatch = useDispatch();
  const securityConditions = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const createInitialGridVal = () => ({
    Rolename: "",
    Roletype: "",
    SecurityConditions: [],
    Assignedto: [],
    _id: nanoid(),
    Condition: "EditorView",
    Actions: "Delete",
  });
  const [gridVal, setGridVal] = useState(createInitialGridVal());
  useEffect(() => {
    if (gridVal.SecurityConditions.length > 0) {
      dispatch(addGrid(gridVal));
      resetGridVal();
    }
  }, [gridVal.SecurityConditions.length, dispatch]);

  const resetGridVal = () => {
    setGridVal(createInitialGridVal());
  };
  const next = () => {
    if (gridVal.Rolename !== "" && gridVal.Roletype !== "" && current === 0) {
      setCurrent(current + 1);
    } else if (securityConditions.length !== 0 && current === 1) {
      let allConditionsValid = true;
      securityConditions.forEach((ele) => {
        if (ele && ele.type === "conditions") {
          if (
            ele.optionSelectorInput === "" ||
            ele.optionsValue1 === "" ||
            ele.optionsValue2 === ""
          ) {
            allConditionsValid = false;
          }
        } else if (ele && ele.type === "group") {
          const { subconditions } = ele;
          let allSubConditionsValid = true;

          subconditions.forEach((subCondition) => {
            if (
              subCondition.optionSelectorInput === "" ||
              subCondition.optionsValue1 === "" ||
              subCondition.optionsValue2 === ""
            ) {
              allSubConditionsValid = false;
            }
          });

          if (!allSubConditionsValid) {
            allConditionsValid = false;
          }
        }
      });
      if (allConditionsValid) {
        setCurrent(current + 1);
      } else {
        notification.info({
          message: "Validation Error",
          description: "Please fill in all required fields before proceeding.",
          placement: "topRight",
        });
      }
    } else {
      if (gridVal.Rolename === "" && gridVal.Roletype === "" && current === 0) {
        setValidateCheck(true);
      } else {
        notification.info({
          message: "Validation Error",
          description: "Please fill in all required fields before proceeding.",
          placement: "topRight",
        });
      }
    }
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
    if (newData && newData.role && newData.roleType) {
      setGridVal((prev) => ({
        ...prev,
        Rolename: newData.role,
        Roletype: newData.roleType,
      }));
    } else if (newData && newData.assignedTo) {
      setGridVal((prev) => ({ ...prev, Assignedto: newData.assignedTo }));
    } else {
      resetGridVal();
    }
  };
  const steps = [
    {
      title: "Add Role",
      content: (
        <AddRole
          sendDatatoParent={handleDatafromChild}
          sendDatatochild={gridVal}
          validateCheck={validateCheck}
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
          <div className="flex gap-3">
            <Button
              onClick={() => {
                dispatch(makegroupconditionsEmpty());
                closeModal();
              }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" onClick={() => next()}>
              Next
            </Button>
          </div>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              if (gridVal.Assignedto.length > 0 && current === 2) {
                setGridVal((prev) => ({
                  ...prev,
                  SecurityConditions: securityConditions,
                }));
                setCurrent(0);
                dispatch(makegroupconditionsEmpty());
                closeModal();
              } else {
                notification.info({
                  message: "Validation Error",
                  description:
                    "Please fill in all required fields before proceeding.",
                  placement: "topRight",
                });
              }
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
