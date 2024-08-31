import { useState } from "react";
import { Form, Input, Select } from "antd";
const AddRole = ({ sendDatatoParent }) => {
  const [addRoleorType, setAddRoleorType] = useState({
    role: "",
    roleType: "",
  });
  const handleChilddata = (name, value) => {
    setAddRoleorType((prev) => {
      const updatedField = { ...prev, [name]: value };
      sendDatatoParent(updatedField);
      return updatedField;
    });
  };
  return (
    <Form layout="vertical">
      <Form.Item
        label="Role name"
        name="role"
        rules={[
          {
            required: true,
            message: "please input your field",
          },
        ]}
        className="text-black font-bold"
      >
        <Input
          className="text-black font-normal"
          value={addRoleorType.role}
          onChange={(e) => {
            handleChilddata("role", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Role Type"
        name="Role Type"
        rules={[
          {
            required: true,
            message: "please select your field",
          },
        ]}
        className="text-black font-bold"
      >
        <Select
          placeholder="select value"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
          value={addRoleorType.role}
          onChange={(Value) => {
            handleChilddata("roleType", Value);
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default AddRole;
