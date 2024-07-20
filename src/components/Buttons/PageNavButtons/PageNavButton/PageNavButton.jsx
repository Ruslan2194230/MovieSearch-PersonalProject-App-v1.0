import { Icon, Button } from './PageNavButton.styled';
import left_arrow from 'assets/images/left_arrow.png';
import right_arrow from 'assets/images/right_arrow.png';

const iconObj = {
  left_arrow,
  right_arrow,
};

export const NavButton = ({ label, reverse, onClick, disabled, icon }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {reverse && label}
      <Icon src={iconObj[icon]} alt={label} reverse={reverse} />
      {!reverse && label}
    </Button>
  );
};
