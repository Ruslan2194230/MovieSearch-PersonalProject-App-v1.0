import { Icon, Button } from './NavButton.module';
import left_arrow from '../../../../images/left_arrow.png';
import right_arrow from '../../../../images/right_arrow.png';

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
