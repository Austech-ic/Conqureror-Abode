import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import CoverImage from '../../assets/images/project.png';
import { GiCornerFlag } from 'react-icons/gi';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';
import House from '../../assets/images/ikoyi.png';
import Pagination from '../../components/pagination/Pagination';
export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Example total pages, you can set this dynamically

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add logic here to fetch new data based on the current page
  };
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
    <Box
      height="60vh"
      backgroundImage={CoverImage}
      backgroundSize="cover"
      backgroundPosition="top"
      position="relative"
      backgroundRepeat="no-repeat"
    >
      <Flex
        h="100%"
        fontFamily={'Arial'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text
          color="white"
          zIndex="1"
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          Project
        </Text>
      </Flex>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))"
      />

      <Box
        position="absolute"
        bottom="-60"
        bg="white"
        w="6xl"
        left="50%"
        boxShadow={'2xl'}
        borderRadius="12px"
        transform="translate(-50%, -50%)"
        h="60"
      >
        <Flex justifyContent={'space-between'} p="10" gap="16">
          <FormControl>
            <FormLabel fontSize="xl">Search:</FormLabel>
            <Input
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="Search for property"
            />
            <Button
              justifyContent={'left'}
              display="flex"
              fontSize="sm"
              mt="5"
              px="20"
              w="fit-content"
              borderRadius={'0'}
              bg="#E6B242"
              color="white"
            >
              Search
            </Button>
          </FormControl>

          <FormControl>
            <FormLabel fontSize="xl">Select Categories:</FormLabel>
            <Select
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="House"
              fontSize="sm"
              color={'#909090'}
            >
              <option></option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="xl">Price Range: </FormLabel>
            <Select
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="House"
              fontSize="sm"
              color={'#909090'}
            >
              <option></option>
            </Select>
          </FormControl>
        </Flex>
      </Box>
      <Box px="40" mt="40" position={'relative'}>
        <Center flexDirection={'column'}>
          <SimpleGrid mt="20" spacing="10" columns={['1', '2']}>
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
          </SimpleGrid>
          <Box py="10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Box>
        </Center>
      </Box>
    </Box>
  );
};