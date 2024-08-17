import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, Text, VStack, Input, Button, HStack, Flex, Spinner, useToast } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = io('http://localhost:4009'); // Update with your server URL if different

const ChatPage = () => {
    const { roomId } = useParams(); // Use dynamic room ID from URL
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const toast = useToast();
    const senderId = 'some-sender-id'; // Replace with actual sender ID
    const recipientId = 'some-recipient-id'; // Replace with actual recipient ID

    useEffect(() => {
        // Join the room
        socket.emit('join-room', roomId);

        // Fetch existing messages for the room
        fetchMessages();

        // Listen for incoming messages
        socket.on('receive-message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Listen for typing indicator
        socket.on('typing', (data) => {
            if (data.roomId === roomId && data.senderId !== senderId) {
                setIsTyping(true);
                setTimeout(() => setIsTyping(false), 2000);
            }
        });

        return () => {
            socket.off('receive-message');
            socket.off('typing');
        };
    }, [roomId]);

    const fetchMessages = async () => {
        try {
            const response = await fetch(`http://localhost:4009/chat/messages/${roomId}`);
            const data = await response.json();
            setMessages(data);
            setLoading(false);
            scrollToBottom();
        } catch (error) {
            toast({
                title: 'Error fetching messages',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;

        const messageData = { senderId, recipientId, message, roomId, timestamp: new Date() };
        socket.emit('send-message', messageData);
        setMessages((prevMessages) => [...prevMessages, messageData]);
        setMessage('');
        scrollToBottom();
    };

    const handleTyping = () => {
        socket.emit('typing', { roomId, senderId });
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            bg="gray.100"
            minH="100vh"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundImage="url('https://source.unsplash.com/1600x900/?chat')"
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
            >
                <VStack spacing={4}>
                    <Heading textTransform="uppercase" size="xl">Chat Room</Heading>
                    {loading ? (
                        <Spinner size="xl" />
                    ) : (
                        <Flex direction="column" w="100%" maxH="400px" overflowY="scroll" p={4} border="1px solid" borderColor="gray.200">
                            {messages.map((msg, index) => (
                                <Box
                                    key={index}
                                    alignSelf={msg.senderId === senderId ? 'flex-end' : 'flex-start'}
                                    bg={msg.senderId === senderId ? 'teal.100' : 'gray.100'}
                                    p={2}
                                    borderRadius="md"
                                    m={1}
                                >
                                    <Text fontSize="sm" color="gray.600">
                                        {new Date(msg.timestamp).toLocaleTimeString()}
                                    </Text>
                                    <Text>{msg.message}</Text>
                                </Box>
                            ))}
                            {isTyping && <Text fontSize="sm" color="gray.500">Someone is typing...</Text>}
                            <div ref={messagesEndRef}></div>
                        </Flex>
                    )}
                    <HStack w="100%">
                        <Input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleTyping}
                            placeholder="Type a message"
                        />
                        <Button
                            onClick={handleSendMessage}
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="teal"
                            variant="solid"
                        >
                            Send
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
};

export default ChatPage;
