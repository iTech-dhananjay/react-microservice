import React, { useEffect } from 'react';
import { Box, Stack, Flex, Heading, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
                <Heading as="h3" size="lg" color="teal.600">₹{amount / 100000}</Heading>
                <Text color="gray.600">Get the best product at the best price!</Text>
                <Button colorScheme="teal" onClick={() => checkoutHandler(amount)}>
                    Buy Now
                </Button>
            </Stack>
        </Box>
    </Box>
);

const Home = () => {
    const location = useLocation();

    const checkoutHandler = async (amount) => {
        try {
            let amount = 1
            const { data: order } = await axios.post(" http://localhost:4009/payment-gateway/paypal/create-payment", {
                amount,
                currency: "USD",
            });
            const approvalUrl = order.links.find(link => link.rel === 'approval_url').href;
            window.location.href = approvalUrl;
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    const executePayment = async (paymentId, payerId) => {
        try {
            const { data } = await axios.get(`http://localhost:4009/api/success?paymentId=${paymentId}&PayerID=${payerId}`);
            console.log('Payment executed:', data);
            alert('Payment successful!');
        } catch (error) {
            console.error('Error executing payment:', error);
            alert('Payment execution failed!');
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const paymentId = searchParams.get('paymentId');
        const payerId = searchParams.get('PayerID');

        if (paymentId && payerId) {
            executePayment(paymentId, payerId);
        }
    }, [location.search]);

    return (
        <Box p={5} bg="gray.100" minH="100vh">
            <Flex alignItems="center" justifyContent="center">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6">
                    <Card
                        amount={500000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783567/pexels-athena-2582937_oqpyvk.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={300000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={100000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783567/pexels-alessandro-oliverio-611273-1472443_ythjmq.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={9000000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-filippo-bergamaschi-202684-986772_pppiuc.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={8000000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-pixabay-159201_x4arbp.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={4000000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-pixabay-301792_u4bwjo.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={1800000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-pok-rie-33563-707399_wajd6s.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={8900000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783760/pexels-joshsorenson-1054397_fqlxxl.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={4500000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783761/pexels-jeshoots-4316_hnacpr.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                    amount={750000}
                    img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783760/pexels-pavel-danilyuk-8438918_du5wbe.jpg"
                    checkoutHandler={checkoutHandler}
                   />
                    <Card
                        amount={9000000}
                        img="http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={870000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783567/pexels-alessandro-oliverio-611273-1472443_ythjmq.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={958000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-filippo-bergamaschi-202684-986772_pppiuc.jpg"
                        checkoutHandler={checkoutHandler}
                    />
                    <Card
                        amount={456000}
                        img="https://res.cloudinary.com/dqkag6b79/image/upload/v1720783566/pexels-pixabay-159201_x4arbp.jpg"
                        checkoutHandler={checkoutHandler}
                    />


                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default Home;