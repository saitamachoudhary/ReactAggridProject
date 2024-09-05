import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { Button } from "antd";
import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import AssignedModel from "./AssignedModel";
import { deleteGriddata } from "../Store/slice";

const CustomButton = (e) => {
  return <Model _id={e.data._id} />;
};
const Deletebutton = (e) => {
  const dispatch = useDispatch();
  return (
    <Button
      className="text-xs p-0"
      onClick={() => {
        dispatch(deleteGriddata(e.data._id));
      }}
    >
      {e.data.Actions}
    </Button>
  );
};
const AggridComp = () => {
  const rowData = useSelector((state) => state.grid.grid);
  const [colDefs,] = useState([
    { field: "Rolename", flex: 1 },
    { field: "Roletype", flex: 1 },
    { field: "Conditions", flex: 1, cellRenderer: CustomButton },
    {
      field: "Assigned to",
      flex: 1,
      cellRenderer: (params) => {
        return params.data.Assignedto.map((ele, index) => {
          return <AssignedModel key={index} prop={ele} _id={params.data._id} />;
        });
      },
    },
    { field: "Actions", flex: 1, cellRenderer: Deletebutton },
  ]);
  return (
    <div className="ag-theme-quartz h-96">
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default AggridComp;
