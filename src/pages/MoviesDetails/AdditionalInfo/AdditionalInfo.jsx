import AdditionalFilmInfoInTabs from './AdditionalFilmInfoInTabs/AdditionalFilmInfoInTabs';
import { AdditionalInfoContainer } from './AdditionalInfo.module';

export const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <h2>Additional information</h2>
      <AdditionalFilmInfoInTabs></AdditionalFilmInfoInTabs>
    </AdditionalInfoContainer>
  );
};
