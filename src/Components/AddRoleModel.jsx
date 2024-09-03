import { useState } from "react";
import { Button, Modal } from "antd";
import StepsComp from "./StepsComp";

const AddRoleModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal=()=>{
    setIsModalOpen(false);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Model
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={800}
      >
        <StepsComp closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default AddRoleModel;
