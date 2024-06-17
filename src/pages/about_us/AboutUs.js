import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/project.png';
import Man1 from '../../assets/images/WhatsApp Image 2024-05-16 at 22.20.png';
import Man2 from '../../assets/images/Frame 129.png';
import Man3 from '../../assets/images/Frame 16.png';
import { PiFlagCheckeredFill } from 'react-icons/pi';
import { GoDotFill, GoGoal } from 'react-icons/go';
import { TbTargetArrow } from 'react-icons/tb';
import { FiCheckCircle } from 'react-icons/fi';
export const AboutUs = () => {
  const Goals = ({ title, desc }) => {
    return (
      <Box>
        <Center
          flexDirection={'column'}
          justifyContent="center"
          alignItem="center"
        >
          <Box p="2" borderRadius="full" bg="#E6B242">
            <FiCheckCircle color="white" size="28" />
          </Box>
          <Text
            mt="2"
            fontSize="24px"
            fontFamily={'Rozha One'}
            color={'#312F2F'}
          >
            {title}
          </Text>
        </Center>
        <Text textAlign="center" fontSize="20px" mt="2" px="4" w="full">
          {desc}
        </Text>
      </Box>
    );
  };
  return (
    <Box>
      <Box
        height="55vh"
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
            fontSize="24px"
            fontWeight={'500'}
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            ABOUT US
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
      </Box>
      <Flex px="40" h="600px" mt="20" gap="32">
        <Box mt="12" h="580px" w="md" position="relative">
          <Box top="0" h="60" w="80" position="absolute">
            <Image
              borderRadius={'10px'}
              objectFit={'cover'}
              src={Man3}
              h="full"
              w="full"
            />
          </Box>
          <Box
            boxShadow={'2xl'}
            h="80"
            w="80"
            left="180px"
            top="20"
            position="absolute"
            zIndex={'1'}
          >
            <Image
              borderRadius={'10px'}
              objectFit={'cover'}
              src={Man1}
              h="full"
              w="full"
            />
          </Box>
          <Box
            h="60"
            borderRadius={'10px'}
            bottom="6"
            w="80"
            position="absolute"
          >
            <Image
              borderRadius={'10px'}
              objectFit={'cover'}
              src={Man2}
              h="full"
              w="full"
            />
          </Box>
        </Box>
        <Box textAlign="left" h="xs" w="540px">
          <Text
            lineHeight={'50px'}
            color="black"
            fontSize="48px"
            fontFamily={'Rozha One'}
          >
            Conquerors{' '}
            <Text as="span" color="#E6B242">
              Abode &<br></br> Properties LTD
            </Text>
          </Text>
          <Text lineHeight={'42px'} fontSize={'20px'} mt="5" maxW="460px">
            Welcome to Conquerors Abode and Properties Ltd, your trusted,
            reliable and premium real estate company .We are dedicated to
            helping you find the perfect property, whether you are looking for
            your dream home or a sound investment opportunity. With years of
            experience in the industry, we have developed a strong reputation
            for providing our clients with exceptional service and access to
            exclusive properties. Our team of experts is committed to
            understanding your unique needs and delivering results that exceed
            your expectations.
          </Text>
        </Box>
      </Flex>
      <Box px="40">
        <Text
          mt="14"
          lineHeight={'42px'}
          fontSize={'20px'}
          textAlign={'left'}
          color="#282828"
        >
          At Conquerors Abode and Properties Ltd, we believe in the power of
          owning real estate as a means of building wealth and creating a secure
          future. We are passionate about helping individuals and families find
          the right property that matches their lifestyle and financial goals.
          <br></br>
          We offer a wide range of services to cater to our clients’ diverse
          needs. From residential properties to commercial spaces, we have an
          extensive database of listings that are constantly updated to ensure
          you find the perfect property to suit your requirements and pocket.
          <br></br>
          Our team of experienced and knowledgeable agents are here to guide you
          every step of the way. Whether you are a first-time buyer or a
          seasoned investor, we will provide you with the information and
          support you need to make informed decisions.
          <br></br>
          In addition to our exceptional service, we are committed to providing
          transparency and integrity in all our dealings. We understand that
          purchasing property is a significant investment, and we strive to
          ensure that you have all the information you need to make an informed
          decision. We value our clients and strive to build long-lasting
          relationships. Our commitment to your satisfaction extends beyond the
          sale or purchase of a property. We are here to assist you with any
          post-sale support, including property management and rental
          assistance.<br></br> When it comes to real estate, we know that trust
          is crucial. With Conquerors Abode and Properties Ltd, you can be
          confident that you are working with a reputable agency that puts your
          needs first. We are dedicated to helping you conquer the real estate
          market, one property at a time.
          <br></br>
          Explore our website to discover the range of properties we have
          available. Whether you are looking for a cozy family home, a luxurious
          retreat, or a thriving commercial space, we have something for
          everyone. Contact us today to begin your journey towards finding your
          perfect property.
        </Text>

        <Box mt="28">
          <Center
            flexDirection={'column'}
            justifyContent="center"
            alignItem="center"
          >
            <PiFlagCheckeredFill color="#E6B242" size="44" />
            <Text fontSize="32px" fontFamily={'Rozha One'} color={'#312F2F'}>
              MISSION{' '}
              <Text as="span" color="#E6B242">
                STATEMENT<br></br>
              </Text>{' '}
            </Text>
          </Center>
          <Text fontSize="24px">
            To deliver exceptional client experiences by achieving three key{' '}
            <br></br>
            objectives
          </Text>

          <SimpleGrid spacing="10" mt="10" columns={[1, 2]}>
            <List w="lg" gap="2" display="flex">
              <GoDotFill size="36" color="#E6B242" />
              <ListItem fontSize="20px" textAlign="left">
                To provide tailored solutions that meet diverse client need and
                pocket whether in residential or commercial property.
              </ListItem>
            </List>

            <List w="lg" gap="2" display="flex">
              <GoDotFill size="36" color="#E6B242" />
              <ListItem fontSize="20px" textAlign="left">
                We aim to leverage cutting edge technologies to streamline
                processes, enhance transparency and maximise efficiency in real
                estate transactions.
              </ListItem>
            </List>

            <List gap="2" w="lg" display="flex">
              <GoDotFill size="36" color="#E6B242" />
              <ListItem fontSize="20px" textAlign="left">
                Fostering long term relationship built on trust and transparency
                is PIVOTAL to us.
              </ListItem>
            </List>
          </SimpleGrid>
        </Box>

        <Box mt="28">
          <Center
            flexDirection={'column'}
            justifyContent="center"
            alignItem="center"
          >
            <GoGoal color="#E6B242" size="44" />
            <Text fontSize="32px" fontFamily={'Rozha One'} color={'#312F2F'}>
              VISION{' '}
              <Text as="span" color="#E6B242">
                STATEMENT<br></br>
              </Text>{' '}
            </Text>
          </Center>
          <Text fontSize="24px">
            To be the most trusted and leading real estate firm in Nigeria that
            provides lasting <br></br> relationships and results while making
            shelter a reality for all
          </Text>
        </Box>

        <Box mt="28">
          <Center
            flexDirection={'column'}
            justifyContent="center"
            alignItem="center"
          >
            <Box p="2" borderRadius="full" bg="#E6B242">
              <FiCheckCircle color="white" size="28" />
            </Box>
            <Text fontSize="32px" fontFamily={'Rozha One'} color={'#312F2F'}>
              OUR{' '}
              <Text as="span" color="#E6B242">
                GOALS<br></br>
              </Text>{' '}
            </Text>
          </Center>
          <Text textAlign="center" fontSize="24px" w="full">
            These goals reflect our commitment to excellence, integrity, and
            customer <br></br>satisfaction. Conquerors Abode and Properties Ltd
            is dedicated to providing <br></br> the best possible real estate
            experience for our clients.
          </Text>

          <SimpleGrid
            columns="2"
            mt="20"
            gap="10"
            justifyContent={'center'}
            alignItems="center"
          >
            <Goals
              title={'Customer Satisfaction '}
              desc={
                'Our primary goal is to ensure that our clients are highly satisfied with their real estate experience. We aim to exceed their expectations by delivering exceptional service, guiding them through the process, and providing them with the best possible property options.'
              }
            />
            <Goals
              title={'Customer Satisfaction '}
              desc={
                'Our primary goal is to ensure that our clients are highly satisfied with their real estate experience. We aim to exceed their expectations by delivering exceptional service, guiding them through the process, and providing them with the best possible property options.'
              }
            />
            <Goals
              title={'Customer Satisfaction '}
              desc={
                'Our primary goal is to ensure that our clients are highly satisfied with their real estate experience. We aim to exceed their expectations by delivering exceptional service, guiding them through the process, and providing them with the best possible property options.'
              }
            />
            <Goals
              title={'Customer Satisfaction '}
              desc={
                'Our primary goal is to ensure that our clients are highly satisfied with their real estate experience. We aim to exceed their expectations by delivering exceptional service, guiding them through the process, and providing them with the best possible property options.'
              }
            />
            <Goals
              title={'Customer Satisfaction '}
              desc={
                'Our primary goal is to ensure that our clients are highly satisfied with their real estate experience. We aim to exceed their expectations by delivering exceptional service, guiding them through the process, and providing them with the best possible property options.'
              }
            />
          </SimpleGrid>
        </Box>

        <Box mt="28">
          <Text
            fontSize="32px"
            fontWeight="500"
            color="#282828"
            textTransform={'uppercase'}
            textAlign="left"
            pl="3"
            borderLeft={'4px solid #E6B242'}
            fontFamily={'Rozha One'}
          >
            BRIEF{' '}
            <Text as="span" color="#E6B242">
              HISTORY
            </Text>
          </Text>
          <Text
            mt="7"
            color="#282828"
            fontSize={'20px'}
            textAlign="left"
            fontWeight="42px"
          >
            Conquerors Abode and Properties Ltd, although established in
            2023,have become a trusted name in the real estate industry, known
            for our professionalism, integrity, and exceptional service.
            <br></br> Our journey began with a vision to create a real estate
            agency that would embody the values of transparency, reliability,
            and customer satisfaction. With a passion for real estate and a deep
            understanding of the market, our founders set out to build a company
            that would exceed the expectations of its clients. <br></br>Over the
            years, we have witnessed the transformation of the real estate
            landscape and adapted to changing market trends. We have navigated
            through various economic cycles, consistently providing our clients
            with the highest level of service and a wide range of property
            options to choose from. <br></br>Throughout our history, we have
            built strong relationships with clients, developers, and industry
            professionals. These relationships have been instrumental in our
            success and have allowed us to expand our reach and offer a diverse
            portfolio of properties. <br></br> Our dedication to customer
            satisfaction and commitment to excellence has earned us a loyal
            client base. We take pride in the fact that a significant portion of
            our business comes from repeat clients and referrals, a testament to
            the trust and satisfaction they have in our services. <br></br> As
            we continue to grow, we remain focused on our core values and
            principles. We constantly invest in our team, ensuring they have the
            knowledge and expertise to provide our clients with sound advice and
            guidance. We also leverage technology and innovation to enhance our
            services and capabilities.<br></br> Today, Conquerors Abode and
            Properties Ltd stands as a leading real estate agency, recognized
            for our professionalism, market knowledge, and exceptional customer
            service. Our journey continues as we strive to exceed our clients'
            expectations, help them achieve their real estate goals, and
            contribute to their long-term success.<br></br> We are proud of our
            history and the relationships we have built along the way. We look
            forward to serving our clients and the community for many more years
            to come, helping them conquer the real estate market and find their
            dream properties.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
