import { Box, Heading, Text, VStack, Icon, Button, HStack, Divider, Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    return (
        <Box
            bg="gray.100"
            minH="100vh"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('https://source.unsplash.com/1600x900/?success')"
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Box
                bg="white"
                p={10}
                borderRadius="lg"
                boxShadow="2xl"
                maxW="lg"
                w="100%"
                border="1px solid"
                borderColor="gray.300"
                textAlign="center"
            >
                <VStack spacing={4}>
                    <Icon as={CheckCircleIcon} w={24} h={24} color="green.500" />
                    <Heading textTransform="uppercase" size="xl">Order Successful</Heading>
                    <Text fontSize="xl" color="gray.700">
                        Your order has been successfully placed.
                    </Text>
                    <HStack>
                        <Text fontSize="lg" color="gray.500">Reference No.: </Text>
                        <Text fontSize="lg" color="gray.900" fontWeight="bold">{referenceNum}</Text>
                    </HStack>
                    <Divider my={4} />
                    <Flex direction="column" align="center" w="100%">
                        <Text fontSize="md" color="gray.600">
                            You will receive a confirmation email with the order details shortly.
                        </Text>
                        <Text fontSize="md" color="gray.600">
                            For any queries, please contact our support team.
                        </Text>
                    </Flex>
                    <Button
                        bgGradient="linear(to-r, teal.400, teal.500)"
                        color="white"
                        size="lg"
                        onClick={() => window.location.href = '/'}
                        _hover={{
                            bgGradient: "linear(to-r, teal.500, teal.600)"
                        }}
                        mt={6}
                    >
                        Go to Home
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
}

export default PaymentSuccess;