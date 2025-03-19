import { useEffect, useReducer, useRef, useState } from "react";
import '../App.css'

function cal(){

    const text= useRef(null);
    const [selectedView, setSelectedView] = useState("calculator");
    const [todoText, setTodoText] = useState("");
    const [dulieu, setDulieu] = useState([]);
    const [todoList, setTodoList] = useState([]); 
    function reduce(state, action){
        switch(action.type){
            case '+' : return{...state, count: state.count+1}
            case '-' : return{...state, count: state.count-1}
            default: return state;
        }
           
    }

   
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                setDulieu(data.data.memes); 
            })
            .catch((error) => {
                console.error("Error fetching memes:", error);
            });
    }, []);


    const[state, dispatch] = useReducer(reduce, {count:0})

    function handlButtonclickincrease(){
        dispatch({type:'+'});
    }
    function handlButtonclickreduce(){
        dispatch({type:'-'});
    }

    function handlButtonclicktext(){
        
        text.current.value = Number(text.current.value) + 10;
    }

    function handleAddTodo() {
        if (todoText.trim()) {
          setTodoList([...todoList, { id: Date.now(), text: todoText }]);
          setTodoText(""); 
        }
      }
    
      function handleRemoveTodo(id) {
        setTodoList(todoList.filter((todo) => todo.id !== id));
      }

 

    return (
        <div className="container">
             <div className="menu">
                <button onClick={() => setSelectedView("calculator")} className="menu-button">
                Calculator
                </button>
                <button onClick={() => setSelectedView("memes")} className="menu-button">
                UseEffect API Memes
                </button>
                <button onClick={() => setSelectedView("todoList")} className="menu-button">
                to do List
                </button>
            </div>
            {selectedView === "calculator" && (
                <div className="calculator">
                        <h1>Increase And Reduce</h1>
                        <input
                        type="text"
                        value={state.count}
                        ref={text}
                        readOnly
                        className="input-box"
                        />
                        <div className="button-container">
                            <button onClick={handlButtonclickincrease} className="button">
                                +
                            </button>
                            <button onClick={handlButtonclickreduce} className="button">
                                -
                            </button>
                            <button onClick={handlButtonclicktext} className="button">
                                Add 10
                            </button>
                        </div>
                </div>
          )}
           {selectedView === "memes" && (
            <div className="memes">
                    <h2>Popular Memes</h2>
                    <div className="meme-container">
                        {dulieu.length > 0 ? (
                            dulieu.map((meme) => (
                                <div key={meme.id} className="meme-item">
                                    <img src={meme.url} alt={meme.name} className="meme-image" />
                                    <p>{meme.name}</p>
                                </div>
                            ))
                        ) : (
                            <p>Loading memes...</p>
                        )}
                    </div>
                </div>
            )}
            {selectedView === "todoList" && (
                <div className="todo-list">
                    <h2>Todo List</h2>
                <div className="todo-input-container">
                  <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Enter a new task"
                    className="todo-input"
                  />
                  <button onClick={handleAddTodo} className="button">
                    Add
                  </button>
                </div>
                <ul className="todo-list-items">
                  {todoList.length > 0 ? (
                    todoList.map((todo) => (
                      <li key={todo.id} className="todo-item">
                        <span>{todo.text}</span>
                        <button onClick={() => handleRemoveTodo(todo.id)} className="button">
                          Remove
                        </button>
                      </li>
                    ))
                  ) : (
                    <p>No tasks yet!</p>
                  )}
                </ul>
              </div>
            )}


        </div>
      );


}

export default cal;
