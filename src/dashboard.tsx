import "./App.css";
import { imgs } from "./assets/images";
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imgs.homeMap}
          style={{ width: "500px", height: "300px", margin: "2rem 0" }}
          alt="home"
          onClick={() =>
            window.open("https://goo.gl/maps/M8ePXHSZoC4KwQfR7", "_blank")
          }
        />
        <button
          onClick={() =>
            window.open("https://goo.gl/maps/M8ePXHSZoC4KwQfR7", "_blank")
          }
        >
          Get Directions for Home
        </button>
      </div>

      {/* <DjRequests /> */}
      {/* <Gallery /> */}
      <SpecialRequests />
      <Footer />
    </div>
  );
}

export default Dashboard;
