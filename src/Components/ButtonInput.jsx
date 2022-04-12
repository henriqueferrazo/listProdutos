import React, {useState} from "react";
import { Button } from "@chakra-ui/react";

function ButtonInput(){
    const [item, setItem] = useState()
    
    function searchProduct(event){
        event.preventDefault()
        setItem([item])
    }
    return(
        <>
        <Button ml='10px' size='lg'colorScheme='teal' variant='solid' obClicke={searchProduct}>Buscar</Button>
        </>

    )
}

export default ButtonInput;