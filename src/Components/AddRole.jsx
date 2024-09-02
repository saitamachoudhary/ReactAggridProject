import { useState,useEffect} from "react";
import { Form, Input, Select } from "antd";
const AddRole = ({ sendDatatoParent,sendDatatochild}) => {
  const [addRoleorType, setAddRoleorType] = useState({
    role: sendDatatochild?.Rolename||"",
    roleType: sendDatatochild?.Roletype||"",
  });
  const handleChilddata = (name, value) => {
    setAddRoleorType((prev) => {
      const updatedField = { ...prev, [name]: value };
      sendDatatoParent(updatedField);
      return updatedField;
    });
  };

  return (
    <Form layout="vertical"
    initialValues={{
      role: addRoleorType.role || "",
      roleType: addRoleorType.roleType || "",
    }}
    >
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
          onChange={(e) => {
            handleChilddata("role", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Role Type"
        name="roleType"
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
          onChange={(Value) => {
            handleChilddata("roleType", Value);
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default AddRole;
