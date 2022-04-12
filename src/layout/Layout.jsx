import React from "react";
// import ButtonInput from "../Components/ButtonInput";
// import InputFunc from "../Components/Input.jsx";
import { Flex, Center } from "@chakra-ui/react";
import Product from "../Components/Product";

function Layout() {

    return (
        <>
            {/* <Center>
                <Flex w='400px' m='50px'>
                    <InputFunc />
                    <ButtonInput />
                </Flex>
            </Center> */}
                <Center>
                    <Flex direction='column'>
                        <Product />
                    </Flex>
                </Center>
            
        </>
    )
}

export default Layout;