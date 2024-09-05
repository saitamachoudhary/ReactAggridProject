import { useState,useRef,useEffect} from "react";
import { Form, Input, Select } from "antd";
const AddRole = ({ sendDatatoParent,sendDatatochild,validateCheck}) => {
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

  const formRef=useRef(null);
  
  useEffect(()=>{
   if(validateCheck){
    formRef.current.validateFields();
   }
  },[validateCheck])

  return (
    <Form ref={formRef} layout="vertical"
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
