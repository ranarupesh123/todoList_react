import React,{useState} from 'react';
import ToDoList from './ToDoList';


const App = ()=>{
  const [inputItem,setInputItem] = useState();
  const [Items,setItems] = useState([]);


  const itemEvent = (event)=>{
    setInputItem(event.target.value);
  };

  const listOfItems =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputItem];
    });
    setInputItem(" ");
  };

  const DeleteItem = (id)=>{
    // console.log("hello");
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input
        type="text"
        placeholder="Add a Item"
        onChange = {itemEvent}
        value ={inputItem}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
             {Items.map((ItemValue,index)=>{
              return <ToDoList key = {index }
              id ={index} text={ItemValue}
              onSelect={DeleteItem}/>;
            })}
        </ol>
      </div>
    </div>
    </>
  );
}


export default App;

