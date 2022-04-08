import React from "react";
import { Input } from "@chakra-ui/react";

function InputFunc(){
    function hadleChange(event) {
        let texteValue = event.target.value;
        console.log(texteValue);
    }
    return(
        <Input placeholder='Produto ...' size='lg' onChange={hadleChange} />
    )
}

export default InputFunc;