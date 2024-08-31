import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import Model from "./Model";
// import '../App.css';
const CustomButton = () => {
  return <Model />;
};
const AggridComp = () => {
  const [rowData, setRowData] = useState([
    {
      "Role name": "Tesla",
      "Role type": "Model Y",
      "Assigned to": true,
      Actions: "noaction",
    },
    {
      "Role name": "Ford",
      "Role type": "F-Series",
      "Assigned to": false,
      Actions: "noaction",
    },
    {
      "Role name": "Toyota",
      "Role type": "Corolla",
      "Assigned to": false,
      Actions: "noaction",
    },
  ]);
  const [colDefs, setColDefs] = useState([
    { field: "Role name", flex: 1 },
    { field: "Role type", flex: 1 },
    { field: "Conditions", flex: 1, cellRenderer: CustomButton },
    { field: "Assigned to", flex: 1 },
    { field: "Actions", flex: 1 },
  ]);
  return (
    <div className="ag-theme-quartz h-96">
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default AggridComp;
