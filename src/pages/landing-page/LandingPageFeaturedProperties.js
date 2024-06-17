import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import House from '../../assets/images/ikoyi.png';
import CoverImage from '../../assets/images/cover_image.png';
import { GiCornerFlag } from 'react-icons/gi';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';
export const LandingPageFeaturedProperties = () => {
  const Properties = ({ image, sqf, description, beds, baths, price }) => {
    return (
      <Box bg="white" borderRadius={'6px'} w="full">
        <Flex h="60">
          <Box w="60">
            <Image
              objectFit={'cover'}
              h="full"
              w="full"
              src={image}
              borderLeftRadius={'5px'}
            />
          </Box>
          <Flex
            position={'relative'}
            h="full"
            flexDirection={'column'}
            px="5"
            pt="4"
          >
            <Text fontWeight="500" fontSize="16" textAlign={'left'}>
              {description}
            </Text>
            <Divider mt="4" />
            <Flex gap="4" my="3">
              <Flex gap="1">
                <GiCornerFlag size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'sm'}>
                  {sqf}
                </Text>
              </Flex>
              <Flex gap="1">
                <MdOutlineBed size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'sm'}>
                  {beds}
                </Text>
              </Flex>
              <Flex gap="1">
                <LuBath size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'sm'}>
                  {baths}
                </Text>
              </Flex>
            </Flex>
            <Divider />

            <Box position={'absolute'} left="5" bottom="6" textAlign={'left'}>
              <Text fontSize={'xs'} color={'#8C8C8C'}>
                Price
              </Text>
              <Text color="#282828" fontWeight={'500'} fontSize={'20'}>
                {' '}
                {price}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  };
  return (
    <Box bg="#F3F4FF" px="40" py="20" h="auto">
      <Heading
        w="full"
        textTransform={'uppercase'}
        fontFamily={'Rozha One'}
        color="#282828"
      >
        Featured{' '}
        <Text as="span" color="#E6B242">
          Properties
        </Text>
      </Heading>
      <Text textAlign={'center'} fontSize="20">
        A plateform to buy, and rent properties without any agent <br></br> or
        commisions.
      </Text>
      <Center>
        <SimpleGrid mt="20" spacing="10" columns={['1', '2']}>
          <Properties
            image={House}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
          <Properties
            image={CoverImage}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
          <Properties
            image={CoverImage}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
          <Properties
            image={House}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
          <Properties
            image={House}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
          <Properties
            image={CoverImage}
            sqf={'8000sqf'}
            beds={'4 Beds'}
            baths={'4 Baths'}
            price={'₦1,200,000.00'}
            description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
          />
        </SimpleGrid>{' '}
      </Center>
      <Button
        mt="20"
        px="10"
        borderRadius={'0'}
        fontWeight="400"
        fontSize="sm"
        bg="#E6B242"
        color="white"
      >
        VIEW MORE
      </Button>
    </Box>
  );
};
