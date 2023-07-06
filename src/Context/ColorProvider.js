import React,{useState} from "react";
import ColorContext from "./ColorContext";


let morning = {backgroundColor: "yellow", color: "black", fontSize: "15px", border: "1px solid black", textAlign: "center"}
const ColorProvider = (props) => {
    const [style, setStyle] = useState(morning)

    return(
        <ColorContext.Provider value={{
            style:style,
            morning: ()=> setStyle(morning),
            twilight:  ()=> setStyle({backgroundColor: "orange", color: "white", fontSize: "22px", border: "1px solid green", textAlign: "left"}),
            night:  ()=> setStyle({backgroundColor: "black", color: "white", fontSize: "30px", border: "1px solid red", textAlign: "right"}),
        }}>
  

            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;