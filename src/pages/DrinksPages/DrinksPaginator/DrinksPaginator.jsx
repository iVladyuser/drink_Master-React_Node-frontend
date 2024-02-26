import { Paginate, Previous, Next } from './DrinksPaginator.styled';

export const Paginator = ({
  limit,
  currentPage,
  itemsLength,
  handlePageChange,
  pageRangeDisplayed,
}) => {
  const pageCount = Math.ceil(itemsLength / limit);

  const handlePageClick = ({ selected }) => {
    handlePageChange(selected);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Paginate
        previousLabel={<Previous />}
        nextLabel={<Next />}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        breakLabel={'...'}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={1}
      />
    </div>
  );
};
