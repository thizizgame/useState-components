export const Task = (props) => {
   
    return <div className="flex items-center gap-2 mt-4 justify-between bg-[#DDDFFF] p-2 rounded-2xl">
     <div className="flex gap-2">
        <input onChange={(event) => props.handleCheck(event, props.index)} checked={props.isChecked} type="checkbox" />
        <p className={props.isChecked ? "line-through": ""}>{props.title}</p>
     </div>   
        {props.isChecked ? (
            <button onClick={() => props.handleDeleteTodo(props.index)} className="p-1 bg-red-200 text-red-500 rounded-xl">Delete</button>
        ):(<button className="p-1 bg-red-200 text-blue-500 rounded-xl">Completed</button>)}
        
    </div>
}
