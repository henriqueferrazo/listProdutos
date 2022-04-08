import React from "react";
import {chakra, Box, Flex, useColorModeValue, Center } from "@chakra-ui/react";

function Card(props) {
    return (
        <Center>
            <Flex
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    maxW="md"
                    mx="auto"
                    bg={useColorModeValue("white", "gray.700")}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                >

                    <Box w='400px' p={{ base: 4, md: 4 }}>
                        <chakra.h1
                            fontSize="2xl"
                            fontWeight="bold"
                            color={useColorModeValue("gray.800", "white")}
                        >
                            {props.name}
                        </chakra.h1>

                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                Score: {props.score}
                            </chakra.h1>
                        </Flex>
                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                Visitada: {props.visitsClickCount}
                            </chakra.h1>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Center >
    )
}

export default Card;