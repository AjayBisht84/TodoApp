import ListItem from "./ListItem";
const ShowItem=({setvalues,handleDeleteItem})=>
{

return(
  <>
  
  {setvalues.map((item) => (
        <ListItem key={item.name}
          todoDate={item.dueDate}
          todoName={item.name} ondelet={handleDeleteItem}></ListItem>
      ))}
  
  </>
)

}

export default ShowItem;


