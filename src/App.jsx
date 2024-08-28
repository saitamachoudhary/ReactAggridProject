import AddRoleModel from "./Components/AddRoleModel";
import AggridComp from "./Components/AggridComp";


function App() {

  return (
   <div className="Parent p-2">
      <div className="mb-3">
        <AddRoleModel/>
      </div>
      <div>
        <AggridComp/>
      </div>
   </div>
  )
}

export default App;
