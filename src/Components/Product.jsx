// import { addPointerEvent } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import api from '../service/Api.js'
import { Spinner, Input, Button, Flex } from '@chakra-ui/react'


function Product() {
    const [butt, setButt] = useState("")
    const [text, setText] = useState("")
    const [produto, setProduto] = useState([])

    function addProduct(event) {
        event.preventDefault()
        setButt(produto)
    }

    function hadleChange(event) {
        let texteValue = event.target.value;
        setText(texteValue)
    }


    useEffect(() => {
        api.get(`/autocomplete?content=${text}&source=nanook`)
            .then((res) => setProduto(res.data.products))

    }, [butt])
    return (
        <>
            <Flex m="20px">
                <Input placeholder='Produto ...' size='lg' type='text' onChange={hadleChange} value={text} />
                <Button ml='10px' size='lg' colorScheme='teal' variant='solid' onClick={addProduct}>Buscar</Button>
            </Flex>
            {
                produto === undefined ?
                    <Spinner colorScheme='teal' />
                    :
                    <Card produtos={produto} />
            }
        </>
    )
}

export default Product;