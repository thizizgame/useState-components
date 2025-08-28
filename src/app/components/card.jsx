export const Card = (props) => {
    const { image, title, description, date } = props.data
    return (
       
        <div className="w-[500px] h-[500px] bg-green-200 text-black p-10 rounded-4xl">
            <img src={image}></img>
            <p>{description}</p>
            <h1>{title}</h1>
            <p>{date}</p>
            
        </div>
    )
        
        
}