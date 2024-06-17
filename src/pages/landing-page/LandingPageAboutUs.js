import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const LandingPageAboutUs = () => {
  return (
    <Box px="40" py="20" h="auto">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#E6B242"
        pl="2"
      >
        About{' '}
        <Text color="#282828" as="span">
          Us{' '}
        </Text>
      </Heading>

      <Flex mt="5" gap="5">
        <Box h="450px" w="md" position="relative">
          <Box
            top="0"
            h="52"
            w="72"
            bg="#BF8181"
            borderRadius={'10px'}
            position="absolute"
          ></Box>
          <Box
            h="72"
            w="72"
            bg="#BFAFAF"
            left="24"
            top="28"
            borderRadius={'10px'}
            position="absolute"
            zIndex={'1'}
          ></Box>
          <Box
            h="32"
            borderRadius={'10px'}
            bottom="0"
            w="60"
            bg="#BF8181"
            position="absolute"
          ></Box>
        </Box>
        <Box textAlign="left" h="xs" w="md">
          <Text color="black" fontSize="40" fontFamily={'Rozha One'}>
            Conquerors{' '}
            <Text as="span" color="#E6B242">
              Abode <br></br>& Properties LTD
            </Text>
          </Text>
          <Text mt="5" maxW="370px" fontSize={'16'}>
            Welcome to Conquerors Abode and Properties Ltd, your trusted,
            reliable and premium real estate company .We are dedicated to
            helping you find the perfect property, whether you are looking for
            your dream home or a sound investment opportunity. With years of
            experience in the industry, we have developed a strong reputation
            for providing our clients with exceptional service and access to
            exclusive properties.{' '}
          </Text>
          <Button
            mt="5"
            px="10"
            borderRadius={'0'}
            fontWeight="400"
            fontSize="sm"
            bg="#E6B242"
            color="white"
          >
            READ MORE
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
