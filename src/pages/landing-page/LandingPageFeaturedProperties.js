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
      <Box
        bg="white"
        borderRadius={'6px'}
        w="full"
        border={'1px solid #F5F5F5'}
      >
        <Flex h={['auto', '60']} flexDirection={['column', 'row']}>
          <Box h={['52', '60']} w={['full', '60']}>
            <Image
              objectFit={'fill'}
              h="full"
              w="full"
              src={image}
              display={['none', 'block']}
              borderLeftRadius={'5px'}
            />
            <Image
              objectFit={'cover'}
              h="100%"
              w="full"
              display={['block', 'none']}
              src={image}
              borderTopRadius={'5px'}
            />
          </Box>
          <Flex
            position={'relative'}
            h={['60', 'full']}
            flexDirection={'column'}
            px="3"
            pt="4"
          >
            <Text fontWeight="500" fontSize="16" textAlign={'left'}>
              {description}
            </Text>
            <Divider mt="4" />
            <Flex gap="4" my="3">
              <Flex gap="1">
                <GiCornerFlag size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {sqf}
                </Text>
              </Flex>
              <Flex gap="1">
                <MdOutlineBed size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {beds}
                </Text>
              </Flex>
              <Flex gap="1">
                <LuBath size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {baths}
                </Text>
              </Flex>
            </Flex>
            <Divider />

            <Box position={'absolute'} left="5" bottom="4" textAlign={'left'}>
              <Text fontSize={'sm'} color={'#8C8C8C'}>
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
    <Box px={['5', '40']} bg="#F3F4FF" py="20" h="auto">
      <Heading
        w="full"
        textTransform={'uppercase'}
        fontFamily={'Rozha One'}
        color="#282828"
        fontSize={['28', '36px']}
      >
        Featured{' '}
        <Text as="span" color="#E6B242">
          Properties
        </Text>
      </Heading>
      <Text textAlign={'center'} fontSize={['18px', '22px']}>
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
