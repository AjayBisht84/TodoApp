const ListItem=(props)=>{
  return(
    <>
    <div className="container">
  
  <div className="row">
    <div className="col-6">{props.todoName}</div>
    <div className="col-4">{props.todoDate}</div>
    <div className="col-2" ><button className="btn btn-danger my-btn" onClick={()=>props.ondelet(props.todoName)}>Delete</button></div>
  </div>
</div>
    </>
  )
}
export default ListItem;


