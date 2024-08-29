import { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import AddRole from "./AddRole";
import SecurityConditions from "./SecurityConditions";
import AssignedTo from "./AssignedTo";
const steps = [
  {
    title: "Add Role",
    content: <AddRole/>,
  },
  {
    title: "Security Conditions",
    content: <SecurityConditions/>,
  },
  {
    title: "Assigned To",
    content: <AssignedTo/>,
  },
];
const StepsComp = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    // textAlign: "center",
    padding:"10px",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
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
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};
export default StepsComp;
