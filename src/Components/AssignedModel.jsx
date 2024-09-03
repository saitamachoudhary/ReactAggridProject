import { useState } from "react";
import { Button, Modal, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { editdropdown } from "../Store/slice";

const AssignedModel = ({ prop, _id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dDvalue, setDdvalue] = useState([]);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const options = [
    {
      label: "@gmail.com",
      value: "@gmail.com",
    },
    {
      label: "@hotmail.com",
      value: "@hotmail.com",
    },
    {
      label: "@outlook.com",
      value: "@outlook.com",
    },
  ];
  const dropDownvalue = useSelector(
    (state) => state.grid.grid.find((ele) => ele._id===_id).Assignedto
  );
  return (
    <>
      <Button onClick={showModal} className="p-0 text-xs">
        {prop}
      </Button>
      <Modal
        title="Enter @ for users and # for groups"
        open={isModalOpen}
        onOk={() => {
          dispatch(editdropdown({dDvalue:dDvalue,_id:_id}));
          handleOk();
        }}
        onCancel={handleCancel}
      >
        <Select
          mode="multiple"
          className="w-full"
          placeholder="select users & groups only"
          defaultValue={dropDownvalue}
          onChange={(Value) => {
            setDdvalue(Value);
          }}
          options={options}
        />
      </Modal>
    </>
  );
};
export default AssignedModel;
