import { useState } from "react";
import { Button, Modal } from "antd";
const Model = () => {
  const [open, setOpen] = useState(false);
  const titleComp = (
    <div className="flex items-center justify-between">
      <h4>Security conditions</h4>
      <div className="flex gap-3">
        <Button type="primary">+Group</Button>
        <Button type="primary">+Conditions</Button>
      </div>
    </div>
  );
  return (
    <>
      <Button className="p-1 text-xs" onClick={() => setOpen(true)}>
        EditorView
      </Button>
      <Modal
        title={titleComp}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        closable={false}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default Model;
