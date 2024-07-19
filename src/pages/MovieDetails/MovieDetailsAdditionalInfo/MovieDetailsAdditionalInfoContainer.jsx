import { MovieDetailsAdditionalInfo } from './MovieDetailsAdditionaInfoTabs/MovieDetailsAdditionalInfo';
import { AdditionalInfoContainer } from './MovieDetailsAdditionalInfoContainer.styled';

export const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <h2>Additional information</h2>
      <MovieDetailsAdditionalInfo></MovieDetailsAdditionalInfo>
    </AdditionalInfoContainer>
  );
};
