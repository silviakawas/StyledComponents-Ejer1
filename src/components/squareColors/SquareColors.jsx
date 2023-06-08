import { useState } from "react";
import { StyledSquare } from "./styles";
import Button from "../button/Button";

const SquareColors = ()=>{

    const[color, setColor] = useState(true);

    return(

        <>
            <StyledSquare active={color}>
                <Button text="Modificar color" handleClick={()=>changeColor(color, setColor)}/>
            </StyledSquare>
        </>
       
    );

};

const changeColor = (color,setColor) =>{
    setColor(!color);
};

export default SquareColors;