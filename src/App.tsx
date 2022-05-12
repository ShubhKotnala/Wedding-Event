import "./App.css";
import Countdown from "./components/countdown";
import DjRequests from "./components/djRequests";
import EventTimeline from "./components/eventTimeline";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import HeroImage from "./components/heroImage";
import Introduction from "./components/introduction";
import SpecialRequests from "./components/specialRequests";

function App() {
  return (
    <div>
      <HeroImage />
      <Introduction />
      <Countdown date="06/23/2022, 23:59:59" />
      <EventTimeline />

      {/* <DjRequests /> */}
      <SpecialRequests />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
