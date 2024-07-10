import { Link } from 'react-router-dom';
import { GoBackLinkSpan } from './GoBackLink.module';

export const GoBackLink = ({ backLinkHref }) => {
  return (
    <GoBackLinkSpan>
      <Link to={backLinkHref}>Go back</Link>
    </GoBackLinkSpan>
  );
};
