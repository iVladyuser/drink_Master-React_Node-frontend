import { Pagination } from './Paginator.styled';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

export const Paginator = ({
  limit,
  currentPage,
  items,
  handlePageChange,
  pageRangeDisplayed,
}) => {
  const pageCount = Math.ceil(items / limit);

  const handlePageClick = ({ selected }) => {
    handlePageChange(selected);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        previousLabel={<RxChevronLeft />}
        nextLabel={<RxChevronRight />}
        breakLabel={'...'}
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
      />
    </div>
  );
};
