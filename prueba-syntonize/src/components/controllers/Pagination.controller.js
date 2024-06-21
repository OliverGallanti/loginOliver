export const generatePageNumbers = (totalPages, currentPage) => {
  const pageNumbers = [];
  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1, 2);

    const start = Math.max(currentPage - 1, 3);
    const end = Math.min(currentPage + 1, totalPages - 2);
    
    if (start > 3) {
      pageNumbers.push("...");
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages - 2) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages - 1, totalPages);
  }
  return pageNumbers;
};
