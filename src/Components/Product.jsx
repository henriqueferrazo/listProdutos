import { addPointerEvent } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Card from "./Card.jsx";
import api from '../service/Api.js'


function Product(){
    const [produtos, setProdutos] = useState()

    useEffect(() => {
        api.get("/autocomplete?content=camiseta&source=nanook")
        .then((res) => setProdutos(res.data)) 
    })
    return(
        <>
        {
            
            produtos === undefined ? 
            <Spinner colorScheme='teal'/>
            :
            <Card produtos={produtos} />
        }
        </>
    )
}

export default Product;