import { useState } from "react";
import { Button, Modal } from "antd";
import StepsComp from "./StepsComp";

const AddRoleModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const showModal = () => {
    setIsModalOpen(true);
    setRenderKey(renderKey + 1);
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
        <StepsComp key={renderKey} closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default AddRoleModel;
