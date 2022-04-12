import React from "react";
import { chakra, Box, Flex, Center } from "@chakra-ui/react";


function Card({ produtos }) {


    return (
        <>
            {
                produtos.map((produto, index) => {
                    return (
                        <Center >
                            <Flex
                                key={index}
                                p={50}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex
                                    maxW="md"
                                    mx="auto"
                                    bg="gray"
                                    shadow="lg"
                                    rounded="lg"
                                    overflow="hidden"
                                >

                                    <Box w='400px' p={{ base: 4, md: 4 }}>
                                        <chakra.h1
                                            fontSize="2xl"
                                            fontWeight="bold"
                                            color="black"
                                        >
                                            {produto.name}{produto.terme}
                                        </chakra.h1>

                                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                                Score: {produto._meta.score}
                                            </chakra.h1>
                                        </Flex>
                                        <Flex mt={3} alignItems="center" justifyContent="space-between">
                                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                                Numero de visitas: {produto._meta.visitsClickCount}
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