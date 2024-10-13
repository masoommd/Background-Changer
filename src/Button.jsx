export default function Button({color,changeColor,text="white"}){
    let updateColour = () => {
        changeColor(color)
    }
    return (
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' 
        style={{backgroundColor:color,color:text}} onClick={updateColour}>
      {color}</button>
    );
}