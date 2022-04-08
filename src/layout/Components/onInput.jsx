import React from "react";
import ButtonInput from "./ButtonInput";
import Card from "./Card";
import {
    Input,
    Flex,
    Center
} from "@chakra-ui/react";

function onInput() {
    // const [text, setText] = useState()

    function hadleChange(event) {
        let texteValue = event.target.value;
        console.log(texteValue);
    }
    return (
        <>
            <Center>
                <Flex w='400px' m='50px'>
                    <Input placeholder='Produto ...' size='lg' onChange={hadleChange} />
                    <ButtonInput />
                </Flex>
            </Center>
            <Center>
                <Flex>
                    <Card name="henrique" visitsClickCount='779' score='345.77496' />
                </Flex>
            </Center>
        </>
    )
}

export default onInput;