import {useState} from "react";
import { Button } from "antd";
import Group from "./Group";

const SecurityConditions = () => {
  const[Groups,setGroups]=useState([]);

  return (
    <div className="Parent">
      <div className="header flex justify-between mb-2">
        <h2 className="text-lg text-black">Security conditions</h2>
        <div className="flex gap-3">
          <Button onClick={()=>{setGroups(prev=>[...prev,<Group/>])}}>+Group</Button>
          <Button>+Conditions</Button>
        </div>
      </div>
      <div className="content text-center">
        {
          Groups===0?(
            <h2 className="text-lg">Please click on Groups or Conditions or Expression button to create your filters.</h2>
          ):(
            <div>
               {
                Groups.map((ele)=>ele)
               }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default SecurityConditions;
