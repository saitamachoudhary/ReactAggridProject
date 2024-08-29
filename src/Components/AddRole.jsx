import { useState } from "react";
import { Form, Input, Select } from "antd";
const AddRole = () => {
  const [inputValue, setInputValue] = useState("");
  const { Option } = Select;
  return (
    <Form layout="vertical">
      <Form.Item
        label="Role name"
        name="Role name"
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
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
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
        <Select>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default AddRole;
