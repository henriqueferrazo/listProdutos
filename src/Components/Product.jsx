import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import api from '../service/Api.js'
import { Spinner, Input, Button, Flex } from '@chakra-ui/react'

function Product() {
//states do button, input e produtos respectivamente
    const [button, setButton] = useState("")
    const [text, setText] = useState("")
    const [produto, setProduto] = useState([])

//função do button alterando o state e utilizando o event.preventDefault() para não carregar a pagina por completo
    function addProduct(event) {
        event.preventDefault()
        setButton(produto)
    }

//função do input capiturando o valor digitado e colocando dentro do state
    function hadleChange(event) {
        let texteValue = event.target.value;
        setText(texteValue)
    }

// utilizando o useEffect para cansumir a Api e passar o valor do input.
    useEffect(() => {
        api.get(`/autocomplete?content=${text}&source=nanook`)
            .then((res) => setProduto(res.data.products))
    }, [button])
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