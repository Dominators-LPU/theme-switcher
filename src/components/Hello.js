
import React,{useContext, useState} from "react";
import ColorContext from "../Context/ColorContext";


const Hello = () => {
  
   let {style,morning, twilight, night} = useContext(ColorContext);
   let [count, setCount] = useState(1)
   let [color, setColor] = useState("twilight")

   function handleClick(){

        if(count === 1){
            twilight()
            setCount(2)
            setColor("night")
        }
        else if(count === 2){
            night()
            setCount(3)
            setColor("morning")
        }
        else if(count === 3){
            morning()
            setCount(1)
            setColor("twilight")
        }

    }


    return(
        <div>
               <div style={style}>
                     <h1>Hello World Guys</h1>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nulla deleniti, asperiores exercitationem modi ducimus repellendus quasi tenetur minima pariatur? Voluptatem numquam quidem distinctio facere expedita provident quisquam laudantium quis qui quas magnam porro aut rerum quia voluptatum, repellendus, animi eaque labore, eveniet laborum veritatis! Saepe quae nobis facere expedita.</p>

               </div>
                <button onClick={handleClick}> {color} </button>
        </div>
    )
}

export default Hello;
