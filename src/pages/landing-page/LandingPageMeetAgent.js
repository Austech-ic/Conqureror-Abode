import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  SocialButton,
  Button,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io5';
export const LandingPageMeetAgent = () => {
  const AgentCard = ({ jobTitle, name }) => {
    return (
      <Box>
        <Box
          h="80"
          position={'relative'}
          borderRadius={'12px'}
          border="1px solid #F5F5F5"
        >
          <Box></Box>
          <Box bottom="5" left="5" position="absolute" textAlign={'left'}>
            <Text fontWeight="500" textTransform={'uppercase'}>
              {name}
            </Text>
            <Text color="#E6B242" fontWeight="500" fontSize="sm">
              {jobTitle}
            </Text>
          </Box>
        </Box>
        <Box mt="5">
          <Stack
            gap={'3'}
            justifyContent={'center'}
            direction={'row'}
            spacing={1}
          >
            <Button
              borderRadius={'full'}
              bg="none"
              boxShadow={'xl'}
              p="0"
              as={IconButton}
              icon={<AiOutlineInstagram size="28" />}
              label={'Instagram'}
              href={'#'}
            ></Button>
            <Button
              borderRadius={'full'}
              bg="none"
              boxShadow={'xl'}
              p="0"
              as={IconButton}
              icon={<MdEmail size="28" />}
              label={'Instagram'}
              href={'#'}
            ></Button>
            <Button
              borderRadius={'full'}
              bg="none"
              boxShadow={'xl'}
              p="0"
              as={IconButton}
              icon={<FaTwitter size="28" />}
              label={'Instagram'}
              href={'#'}
            ></Button>
            <Button
              borderRadius={'full'}
              bg="none"
              boxShadow={'xl'}
              p="0"
              as={IconButton}
              icon={<IoLogoFacebook size="28" />}
              label={'Instagram'}
              href={'#'}
            ></Button>
          </Stack>
        </Box>
      </Box>
    );
  };
  return (
    <Box px="40" py="20" h="auto">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#312F2F"
        pl="2"
      >
        Met Our{' '}
        <Text as="span" color="#E6B242">
          Agents
        </Text>
      </Heading>
      <Text textAlign={'left'} fontSize={'20'} mt="3">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br>{' '}
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </Text>

      <SimpleGrid spacing="14" mt="10" columns={['1', '3']}>
        <AgentCard name="ARCH. MICHAEL OYEDEPOP" jobTitle={'Architect'} />
        <AgentCard name="ARCH. MICHAEL OYEDEPOP" jobTitle={'Architect'} />
        <AgentCard name="ARCH. MICHAEL OYEDEPOP" jobTitle={'Architect'} />
      </SimpleGrid>
    </Box>
  );
};
