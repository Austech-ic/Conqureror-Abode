// Pagination.js
import React from 'react';
import { Button, ButtonGroup, Box, IconButton } from '@chakra-ui/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const createPageArray = () => {
    let pages = [];
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage > totalPages - 3) {
        pages = [
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <Box
      display="flex"
      gap="5"
      justifyContent="center"
      alignItems="center"
      mt={4}
    >
      <ButtonGroup isAttached>
        <IconButton
          icon={<BiChevronLeft />}
          isDisabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
          borderRadius="md"
        />
        {createPageArray().map((page, index) =>
          typeof page === 'number' ? (
            <Button
              key={index}
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
              borderRadius="md"
            >
              {page}
            </Button>
          ) : (
            <Button borderRadius="md" key={index} isDisabled>
              {page}
            </Button>
          )
        )}
        <IconButton
          icon={<BiChevronRight />}
          isDisabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
          borderRadius="md"
        />
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
