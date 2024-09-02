import { Button } from "antd";
import Group from "./Group";
import Conditions from "./Conditions";
import { useDispatch, useSelector } from "react-redux";
import { addgroups, addconditions } from "../Store/group&conditionSlice";

const SecurityConditions = ({sendDatatoParent}) => {
  const dispatch = useDispatch();
  const components = useSelector(
    (state) => state.groupConditon.groupconditions
  );
  const addConditions = () => {
    sendDatatoParent({id:components.map(ele=>ele.id)});
    dispatch(addconditions());
  };

  const addGroup = () => {
    sendDatatoParent({id:components.id});
    dispatch(addgroups());
  };

  return (
    <div className="Parent overflow-auto">
      <div className="header flex justify-between mb-2">
        <h2 className="text-lg text-black">Security conditions</h2>
        <div className="flex gap-3">
          <Button onClick={addGroup}>+Group</Button>
          <Button onClick={addConditions}>+Conditions</Button>
        </div>
      </div>
      <div className="content text-center">
        {components.length === 0 ? (
          <h2 className="text-lg">
            Please click on Groups or Conditions or Expression button to create
            your filters.
          </h2>
        ) : (
          components.map((component) => {
            const { type, id } = component;
            if (type === "group") {
              return <Group key={id} id={id} />;
            } else if (type === "conditions") {
              return <Conditions key={id} id={id} ele={component}/>;
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default SecurityConditions;
