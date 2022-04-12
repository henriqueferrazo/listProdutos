import React,{useState} from "react";
import { Input } from "@chakra-ui/react";

function InputFunc(){
    
    const [text, setText] = useState("")

    function hadleChange(event) {
        let texteValue = event.target.value;
        setText(texteValue)
    }
    return(
        <>
            <Input placeholder='Produto ...' size='lg' onChange={hadleChange} value={text}/>
        </>
    )
}

export default InputFunc;
