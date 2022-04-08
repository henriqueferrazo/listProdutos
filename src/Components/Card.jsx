import React from "react";
import { chakra, Box, Flex, Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

function Card({ produtos }) {
    const [color, setColor] = useColorModeValue()
    
    function colorTheme(value){
        let valueColor = setColor(value)
    }
    
    return (
        <>
            {
                produtos.map((produto, index) => {
                    return (
                        <Center key={index}>
                            <Flex
                                p={50}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex
                                    maxW="md"
                                    mx="auto"
                                    bg={colorTheme("white", "gray.700")}
                                    shadow="lg"
                                    rounded="lg"
                                    overflow="hidden"
                                >

                                    <Box w='400px' p={{ base: 4, md: 4 }}>
                                        <chakra.h1
                                            fontSize="2xl"
                                            fontWeight="bold"
                                            color={colorTheme("gray.800", "white")}
                                        >
                                            {produto.name}
                                        </chakra.h1>

                                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                                Score: {produto.score}
                                            </chakra.h1>
                                        </Flex>
                                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                                Visitada: {produto.visitsClickCount}
                                            </chakra.h1>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Center >
                    )
                })
            }

        </>
    )
}

export default Card;