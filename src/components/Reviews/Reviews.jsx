import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/getMovies';
import { ListItem, StyledList, ReviewsDescr } from './Reviews.styled';

const Reviews = () => {
  const location = useLocation();

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);
  // console.log('location in Reviews',location);
  return reviews.length === 0 ? (
    <h3>No Reviews.!!!!!!</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Reviews;
