import React from 'react';
import { Box, Stack, Flex, Heading, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

const Card = ({ amount, img, checkoutHandler }) => (
    <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.2s"
        _hover={{ transform: "scale(1.05)" }}
        bg="white"
    >
        <Box h="250px" overflow="hidden">
            <Image src={img} alt="product" objectFit="cover" w="100%" h="100%" />
        </Box>
        <Box p="6">
            <Stack spacing="3">
                <Heading as="h3" size="lg" color="teal.600">₹{amount / 100}</Heading>
                <Text color="gray.600">Get the best product at the best price!</Text>
                <Button colorScheme="teal" onClick={() => checkoutHandler(amount)}>
                    Buy Now
                </Button>
            </Stack>
        </Box>
    </Box>
);

const Home = () => {
    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://localhost:4009/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:4009/api/checkout", {
            amount
        });

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Dhananjay ITech",
            description: "Node With PayPal",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4009/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    };

    return (
        <Box p={5} bg="gray.100" minH="100vh">
            <Flex alignItems="center" justifyContent="center">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6">
                    <Card
                        amount={500000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720782126/rei-yamazaki--76uBPIqaKE-unsplash_zhjxy4.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={500000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720782126/rei-yamazaki--76uBPIqaKE-unsplash_zhjxy4.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={3000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default Home;