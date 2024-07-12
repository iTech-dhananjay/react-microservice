import { Box, Heading, Text, VStack, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    return (
        <Box bg="gray.100" minH="100vh" p={4}>
            <VStack h="100vh" justifyContent="center" spacing={4} bg="white" p={8} borderRadius="lg" boxShadow="lg">
                <Icon as={CheckCircleIcon} w={16} h={16} color="green.500" />
                <Heading textTransform="uppercase" size="lg">Order Successful</Heading>
                <Text fontSize="lg" color="gray.700">
                    Reference No.: <Text as="span" fontWeight="bold">{referenceNum}</Text>
                </Text>
                <Button colorScheme="teal" size="lg" onClick={() => window.location.href = '/'}>
                    Go to Home
                </Button>
            </VStack>
        </Box>
    );
}


export default PaymentSuccess