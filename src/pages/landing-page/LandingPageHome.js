import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/cover_image.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
export const LandingPageHome = () => {
  return (
    <Box
      height={['auto', '150vh']}
      pb={['20', 'auto']}
      backgroundImage={CoverImage}
      backgroundSize="cover"
      backgroundPosition="top"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      ></Box>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        className="hero"
        h="100%"
        w="100%"
      >
        <Flex
          textAlign={'left'}
          flexDirection={'column'}
          h="full"
          w="fit-content"
          pr={['0', '48']}
          mx={['5', 'auto']}
        >
          <Text
            zIndex={'2'}
            fontSize={['4xl', '7xl']}
            fontWeight="400"
            lineHeight={['40px', '84px']}
            mb="4"
            mt="44"
            color="white"
            textTransform={'uppercase'}
            textAlign="left"
            pl="3"
            borderLeft={'4px solid #E6B242'}
            fontFamily={'Rozha One'}
          >
            Welcome to{' '}
            <Text as="span" color="#E6B242">
              Conquerors<br></br>
            </Text>{' '}
            Abode & Properties LTD.
          </Text>

          <Text
            fontFamily="Inter"
            textAlign={'left'}
            color="white"
            zIndex={'2'}
            fontWeight={'300'}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            <br></br>
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>

          <Button
            mt="16"
            w="fit-content"
            zIndex={'2'}
            fontSize="sm"
            color="white"
            rightIcon={<IoIosArrowDroprightCircle size="24" color="white" />}
            fontWeight={'300'}
            borderRadius={0}
            textTransform={'uppercase'}
            bg="#E6B242"
            fontFamily={'Inter'}
          >
            View Our Project
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
