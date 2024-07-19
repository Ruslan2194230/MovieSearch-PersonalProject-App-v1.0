import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/getMovies';
import {
  ReviewsListItem,
  ReviewsStyledList,
  ReviewsDescription,
  ReviewsListText,
  ReviewsListSpan,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviewsMovie(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);
  return reviews.length === 0 ? (
    <h3>No Reviews.!!!!!!</h3>
  ) : (
    <ReviewsStyledList>
      {reviews.map(({ id, author, content }) => (
        <ReviewsListItem key={id}>
          <ReviewsListText>
            <ReviewsListSpan>Author:</ReviewsListSpan> {author}
          </ReviewsListText>
          <ReviewsDescription>{content}</ReviewsDescription>
        </ReviewsListItem>
      ))}
    </ReviewsStyledList>
  );
};

// export default Reviews;

///
///
///
///
///
