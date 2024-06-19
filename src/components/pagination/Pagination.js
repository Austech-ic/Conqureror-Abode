// Pagination.js
import React from 'react';
import { Button, ButtonGroup, Box, IconButton, Flex } from '@chakra-ui/react';
import { BiArrowFromLeft, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex gap="3">
      <Button
        borderRadius={'full'}
        border="1px solid #F5F5F5"
        bg="none"
        color="black"
        fontSize={'sm'}
        fontWeight={'400'}
        onClick={previousPage}
        leftIcon={BiArrowFromLeft}
      />
      {pageNumbers.map((number) => (
        <Button
          borderRadius={'full'}
          border="1px solid #F5F5F5"
          key={number}
          bg="none"
          h="9"
          w="9"
          fontSize={'sm'}
          fontWeight={'400'}
          onClick={() => paginate(number)}
        >
          {number}
        </Button>
      ))}
      <Button
        borderRadius={'full'}
        border="1px solid #F5F5F5"
        bg="none"
        fontSize={'sm'}
        fontWeight={'400'}
        onClick={previousPage}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
