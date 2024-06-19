import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { GoChevronDown } from 'react-icons/go';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
export const LandingPageServices = () => {
  return (
    <Box px={['5', '40']} py="20" bg="#F3F4FF" h={['auto', '60vh']}>
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#282828"
        fontSize={['28', '36px']}
        pl="2"
      >
        Our{' '}
        <Text color="#E6B242" as="span">
          Services{' '}
        </Text>
      </Heading>
      <Text fontSize={['16', '24px']} textAlign={'left'} mt="3">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br></br>{' '}
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </Text>

      <Flex flexDirection={['column', 'row']} gap="5" mt="10">
        <Button
          pl="5"
          py="5"
          size="xl"
          width={['auto', '50%']}
          justifyContent="flex-start"
          borderRadius={'6px'}
          flexGrow={'1'}
          bg="white"
          leftIcon={<BsFillHouseFill color="#E6B242" size={'28'} />}
          fontWeight={'400'}
          fontSize={['14', '20']}
        >
          {' '}
          Real Estate
        </Button>
        <Menu>
          <MenuButton
            textAlign={'left'}
            px="5"
            py="5"
            size="xl"
            width={['auto', '50%']}
            justifyContent="flex-start"
            borderRadius={'6px'}
            flexGrow={'1'}
            bg="white"
            color="black"
            as={Button}
            rightIcon={<GoChevronDown />}
            leftIcon={<GrUserWorker color="#E6B242" size="28" />}
            fontWeight={'400'}
            fontSize={['14', '20']}
          >
            Builder & Civil Engineers
          </MenuButton>
          <MenuList w={['xs', 'sm']} py="0">
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Consultancy
              </Text>
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={'500'}>
                Marketing
              </Text>
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Development
              </Text>
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Management
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
