import "./App.css";
import Countdown from "./components/countdown";
import EventTimeline from "./components/eventTimeline";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import HeroImage from "./components/heroImage";
import Introduction from "./components/introduction";
import SpecialRequests from "./components/specialRequests";

function Dashboard() {
  return (
    <div>
      <HeroImage />
      <Introduction />
      <Countdown date="06/23/2022, 23:59:59" />
      {/* <Countdown date="05/26/2022, 18:17:59" /> */}
      <EventTimeline />

      {/* <DjRequests /> */}
      <Gallery />
      <SpecialRequests />
      <Footer />
    </div>
  );
}

export default Dashboard;
