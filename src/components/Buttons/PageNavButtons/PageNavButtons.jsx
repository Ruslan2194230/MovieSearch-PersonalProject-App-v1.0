import { NavButton } from './NavButton';

export const PageNavButtons = ({ page, handlePageChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <NavButton
        disabled={page === 1}
        label="Prev page"
        icon="left_arrow"
        onClick={() => handlePageChange(page - 1)}
      ></NavButton>
      <NavButton
        // disabled={totalPages === true}
        label="Next page"
        icon="right_arrow"
        reverse="true"
        onClick={() => handlePageChange(page + 1)}
      ></NavButton>
    </div>
  );
};
