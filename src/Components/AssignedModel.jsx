import { useState} from "react";
import { Button, Modal, Select,notification} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { editdropdown } from "../Store/slice";

const AssignedModel = ({ prop, _id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dDvalue, setDdvalue] = useState([]);
  const [addOption, setAddOption] = useState([]);
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
  const options2 = [
    {
      label: "abcd",
      value: "abcd",
    },
    {
      label: "efgh",
      value: "efgh",
    },
    {
      label: "ijkl",
      value: "ijkl",
    },
  ];
  const dropDownvalue = useSelector(
    (state) => {
      const gridElement=state.grid.grid.find((ele) => ele._id===_id);
      return gridElement?gridElement.Assignedto:[];
    }
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
           if(dDvalue.length!==0){
            dispatch(editdropdown({dDvalue:dDvalue,_id:_id}));
          handleOk();
           }
           else{
            notification.info({
              message: "Validation Error",
              description:
                "Please fill in all required fields before proceeding.",
              placement: "topRight",
            });
           }
        }}
        onCancel={handleCancel}
      >
        <Select
          mode="multiple"
          className="w-full"
          placeholder="select users & groups only"
          defaultValue={dropDownvalue}
          onSearch={(input)=>{
            if (input.startsWith("@")) {
              setAddOption(options);
            } else if (input.startsWith("#")) {
              setAddOption(options2);
            } else {
              setAddOption([]);
            }
          }}
          onChange={(Value) => {
            setDdvalue(Value);
          }}
          options={addOption}
          showSearch
          filterOption={false}
        />
      </Modal>
    </>
  );
};
export default AssignedModel;
