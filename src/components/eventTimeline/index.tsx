import { StyledContainer } from "./style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { imgs } from "../../assets/images";

function EventTimeline() {
  return (
    <StyledContainer>
      <img
        src={imgs.weddingEvents}
        alt="Special Request"
        className="headerImg"
      />

      <div className="divider" />
      <VerticalTimeline lineColor="#cd5453">
        <VerticalTimelineElement
          contentStyle={{ border: "1px solid #cd5453" }}
          contentArrowStyle={{ display: "none" }}
          className="vertical-timeline-element--work"
          date="Monday, 20 June 2022"
          iconStyle={{ background: "#e3dcdc", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Mehendi</h3>

          <div>
            <h4>Where</h4> - 1 C Mahaveer international colony, Behind
            Vridhashram
            <br />
            <h4>When</h4> - 03:30pm
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: "none" }}
          contentStyle={{ border: "1px solid #cd5453" }}
          date="Tuesday, 21 June 2022"
          iconStyle={{ background: "#e3dcdc", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Haldi</h3>

          <div>
            <h4>Where</h4> - 1 C Mahaveer international colony, Behind
            Vridhashram
            <br />
            <h4>When</h4> - 03:30pm
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: "none" }}
          contentStyle={{ border: "1px solid #cd5453" }}
          date="Wednesday, 22 June 2022"
          iconStyle={{ background: "#e3dcdc", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Ladies Sangeet</h3>

          <div>
            <h4>Where</h4> - 1 C Mahaveer international colony, Behind
            Vridhashram
            <br />
            <h4>When</h4> - 03:30pm
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: "none" }}
          contentStyle={{ border: "1px solid #cd5453" }}
          date="Thursday, 23 June 2022"
          iconStyle={{ background: "#e3dcdc", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Wedding</h3>

          <div>
            <h4>Where</h4> - 1 C Mahaveer international colony, Behind
            Vridhashram
            <br />
            <h4>When</h4> - 03:30pm
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </StyledContainer>
  );
}

export default EventTimeline;
