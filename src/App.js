//Components
import HeaderContent from "components/header/HeaderContent";
import ExchangeRateComponent from "components/exchangeRate/ExchangeRateComponent";
import BenefitsContent from "components/benefits/BenefitsContent";
import AdvertisingBannerContent from "components/advertisingBanner/AdvertisingBannerContent";
import QuestionsContent from "components/questions/QuestionsContent";

function App() {
  return (
    <>
      <HeaderContent />
      <ExchangeRateComponent />
      <BenefitsContent />
      <AdvertisingBannerContent />
      <QuestionsContent />
    </>
  );
}

export default App;
