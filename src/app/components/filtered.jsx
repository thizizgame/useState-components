export const Filtered = (props) => {
    const { title, isCompleted, isChecked } = props.data
    return <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" />
        <p className={isCompleted && "line-through"}>{title}</p>
        {isCompleted ? (
            <button className="p-1 bg-red-200 text-red-500 rounded-xl">Delete</button>
        ):(<button className="p-1 bg-red-200 text-blue-500 rounded-xl">Completed</button>)}
        {isChecked}
    </div>
}
