import { IoMdClose } from "react-icons/io";
import { Button } from "antd";
import Conditions from "./Conditions";
import { useDispatch, useSelector } from "react-redux";
import { addsubconditions } from "../Store/group&conditionSlice";
const Group = ({ id }) => {
  const dispatch = useDispatch();
  const subconditions = useSelector(state => state.groupConditon.groupconditions.find(ele => ele.id === id).subconditions);
  const addSubconditions = () => {
    dispatch(addsubconditions({ id: id }));
  };
  return (
    <div className="GroupParent w-full border-2">
      <div className="flex gap-2 justify-end p-2 items-center">
        <Button type="primary" onClick={addSubconditions}>
          +Conditions
        </Button>
        <IoMdClose className="text-lg" />
      </div>
      {
        subconditions.map(ele => <Conditions key={ele.id} />)
      }
    </div>
  );
};

export default Group;
