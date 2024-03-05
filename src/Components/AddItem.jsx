import { useState } from "react";

const AddItem = ({getItem}) => {
  const[fval,setFval]=useState("");
  const[sval,setSval]=useState("");
  
  const handelName=(event)=>
  {
      setFval(event.target.value);
  };
  const handelDate=(event)=>
  {
      setSval(event.target.value);
  };
  const fetchval=()=>
  {
    getItem(fval,sval);
    setFval("");
    setSval("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" value={fval} onChange={handelName} placeholder="Enter Item"></input>
          </div>
          <div className="col-4">
            <input type="date" value={sval} onChange={handelDate}></input>
          </div>
          <div className="col-2">
            <button className="btn btn-primary my-btn" onClick={fetchval}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddItem;



