//Components
import HeaderContent from "components/header/HeaderContent";
import ExchangeRateComponent from "components/exchangeRate/ExchangeRateComponent";
import BenefitsContent from "components/benefits/BenefitsContent";
import AdvertisingBannerContent from "components/advertisingBanner/AdvertisingBannerContent";
import QuestionsContent from "components/questions/QuestionsContent";
import FooterContent from "components/footer/FooterContent";
import SuscriptionContent from "components/suscriptions/SuscriptionContent";

function App() {
  return (
    <>
      <HeaderContent />
      <ExchangeRateComponent />
      <BenefitsContent />
      <AdvertisingBannerContent />
      <SuscriptionContent />
      <QuestionsContent />
      <FooterContent />
    </>
  );
}

export default App;
