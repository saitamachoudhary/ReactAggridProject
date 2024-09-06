import { IoMdClose } from "react-icons/io";
import { Button} from "antd";
import Conditions from "./Conditions";
import { useDispatch, useSelector } from "react-redux";
import { addsubconditions, deleteGroups} from "../Store/group&conditionSlice";
import SelectdropDown from "./SelectdropDown";
const Group = ({ id, _idP,index}) => {
  const dispatch = useDispatch();
  const groupconditions = useSelector((state) =>
    state.groupConditon.groupconditions.find((ele) => ele.id === id)
  );
  const subconditions = groupconditions
    ? groupconditions.subconditions
    : undefined;
  const fallbackSubconditions = useSelector(
    (state) => state.grid.grid.find((ele) => ele._id === _idP)?.subconditions
  );
  const finalSubconditions = subconditions || fallbackSubconditions || [];
  const addSubconditions = () => {
    dispatch(addsubconditions({ id: id }));
  };
  const handleDeletegroup = () => {
    dispatch(deleteGroups({ id: id }));
  };
  return (
    <div className="flex flex-col justify-start gap-2">
      {
        index>0?(
        <SelectdropDown id={id}/>
        ):null
      }
      <div className="GroupParent w-full border-2">
        <div className="flex gap-2 justify-end p-2 items-center">
          <Button type="primary" onClick={addSubconditions}>
            +Conditions
          </Button>
          <IoMdClose className="text-lg" onClick={handleDeletegroup} />
        </div>
        {finalSubconditions.map((ele,index) => (
          <Conditions key={ele.id} id={ele.id} ele={ele} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Group;
