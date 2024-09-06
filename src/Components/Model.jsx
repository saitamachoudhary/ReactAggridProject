import { useState } from "react";
import { Button, Modal, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Group from "./Group";
import {
  makegroupconditionsFill,
  makegroupconditionsEmpty,
  addgroups,
  addconditions,
} from "../Store/group&conditionSlice";
import { editconditionorgroup } from "../Store/slice";
const Model = ({ _id }) => {
  const [open, setOpen] = useState(false);
  const Pcomponents = useSelector((state) => {
    const gridElement = state.grid.grid.find((ele) => ele._id === _id);
    return gridElement ? gridElement.SecurityConditions : [];
  });
  const components = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const dispatch = useDispatch();

  const addGroup = () => {
    dispatch(addgroups());
  };
  const titleComp = (
    <div className="flex items-center justify-between">
      <h4>Security conditions</h4>
      <div className="flex gap-3">
        <Button onClick={addGroup}>+Group</Button>
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
          let allConditionsValid = true;
          components.forEach((ele) => {
            if (ele.type === "conditions") {
              if (
                ele.optionSelectorInput === "" ||
                ele.optionsValue1 === "" ||
                ele.optionsValue2 === ""
              ) {
                allConditionsValid = false;
              }
            } else if (ele.type === "group") {
              const { subconditions } = ele;
              let allSubConditionsValid = true;

              subconditions.forEach((subCondition) => {
                if (
                  subCondition.optionSelectorInput === "" ||
                  subCondition.optionsValue1 === "" ||
                  subCondition.optionsValue2 === ""
                ) {
                  allSubConditionsValid = false;
                }
              });

              if (!allSubConditionsValid) {
                allConditionsValid = false;
              }
            }
          });
          if (allConditionsValid) {
            dispatch(
              editconditionorgroup({ _id: _id, components: components })
            );
            dispatch(makegroupconditionsEmpty());
            setOpen(false);
          } else {
            notification.info({
              message: "Validation Error",
              description:
                "Please fill in all required fields before proceeding.",
              placement: "topRight",
            });
          }
        }}
        onCancel={() => {
          dispatch(makegroupconditionsEmpty());
          setOpen(false);
        }}
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
              components.map((component,index) => {
                const { type, id} = component;
                if (type === "group") {
                  return <Group key={id} id={id} _idP={_id} index={index} />;
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
