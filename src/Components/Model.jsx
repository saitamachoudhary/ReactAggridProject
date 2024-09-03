import { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Group from "./Group";
import Conditions from "./Conditions";
import { makegroupconditionsFill,makegroupconditionsEmpty} from "../Store/group&conditionSlice";
import { addgroups, addconditions } from "../Store/group&conditionSlice";
import { editconditionorgroup } from "../Store/slice";
const Model = ({ _id }) => {
  const [open, setOpen] = useState(false);
  const Pcomponents = useSelector(
    (state) => state.grid.grid.find((ele) => ele._id === _id).SecurityConditions
  );
  const components = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const dispatch = useDispatch();
  const addConditions = () => {
    dispatch(addconditions());
  };

  const addGroup = () => {
    dispatch(addgroups());
  };
  const titleComp = (
    <div className="flex items-center justify-between">
      <h4>Security conditions</h4>
      <div className="flex gap-3">
        <Button onClick={addGroup}>+Group</Button>
        <Button onClick={addConditions}>+Conditions</Button>
      </div>
    </div>
  );
  return (
    <>
      <Button
        className="p-1 text-xs"
        onClick={() => {
          dispatch(makegroupconditionsFill(Pcomponents));
          setOpen(true);
        }}
      >
        EditorView
      </Button>
      <Modal
        title={titleComp}
        centered
        open={open}
        onOk={() => {
          dispatch(editconditionorgroup({_id:_id,components:components}));
          dispatch(makegroupconditionsEmpty());
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        width={1000}
        closable={false}
      >
        <div className="Parent overflow-auto">
          <div className="content text-center">
            {components.length === 0 ? (
              <h2 className="text-lg">
                Please click on Groups or Conditions or Expression button to
                create your filters.
              </h2>
            ) : (
              components.map((component) => {
                const { type, id } = component;
                if (type === "group") {
                  return <Group key={id} id={id} />;
                } else if (type === "conditions") {
                  return <Conditions key={id} id={id} ele={component} />;
                } else {
                  return null;
                }
              })
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Model;
