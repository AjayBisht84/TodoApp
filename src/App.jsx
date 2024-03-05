import "bootstrap/dist/css/bootstrap.css";
import AppName from "./Components/AppName";

import AddItem from "./Components/AddItem";
import ShowItem from "./Components/ShowItem";
import "./App.css";
import { useState } from "react";
function App() {
 
  const list=[{name:'ajay',dueDate:'3-3-2020'},{name:'bhawana',dueDate:'3-3-2020'}]

  const [item, setItem] = useState(list);

  function handelItem(f, k) {
    const newValue = [...item, { name: f, dueDate: k }];
    setItem(newValue);
    console.log(newValue);
  }
  const deleteitem=(v)=>
  {
   const newafterdeelte= item.filter(x=>(x.name!==v))
   setItem(newafterdeelte);
  }

  return (
    <center>
      <AppName></AppName>
      <AddItem getItem={handelItem}></AddItem>

      <ShowItem setvalues={item} handleDeleteItem={deleteitem}></ShowItem>
    </center>
  );
}

export default App;



