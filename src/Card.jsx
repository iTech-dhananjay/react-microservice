import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            transition="all 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            w="full"
            maxW="sm"
            p={4}
        >
            <VStack spacing={4}>
                <Image src={img} boxSize="64" objectFit="cover" borderRadius="lg" />
                <Text fontSize="2xl" fontWeight="bold" color="teal.600">₹{amount / 100}</Text>
                <Button colorScheme="teal" onClick={() => checkoutHandler(amount)}>Buy Now</Button>
            </VStack>
        </Box>
    );
}

export default Card;