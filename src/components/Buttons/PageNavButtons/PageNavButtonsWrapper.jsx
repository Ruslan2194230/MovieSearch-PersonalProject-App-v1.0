import { NavButton } from './PageNavButton/PageNavButton';
import {
  PageIndexContainer,
  PageNavButtonsContainer,
} from './PageNavButtonsWrapper.styled';

export const PageNavButtonsWrapper = ({
  page,
  handlePageChange,
  totalPages,
}) => {
  return (
    <PageNavButtonsContainer>
      <NavButton
        disabled={page === 1}
        label="Prev page"
        icon="left_arrow"
        onClick={() => handlePageChange(page - 1)}
      ></NavButton>
      <PageIndexContainer>{page}</PageIndexContainer>
      <NavButton
        disabled={totalPages === page}
        label="Next page"
        icon="right_arrow"
        reverse="true"
        onClick={() => handlePageChange(page + 1)}
      ></NavButton>
    </PageNavButtonsContainer>
  );
};
