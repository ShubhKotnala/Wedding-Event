import { StyledContainer } from "./style";
import { Text, FontSize } from "../../helpers/text";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function EventTimeline() {
  return (
    <StyledContainer>
      <Text size={FontSize.ExtraRegular} color="#fff">
        Wedding Events
      </Text>

      <div className="divider" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Monday, 20 June 2022"
          iconStyle={{ background: "rgba(94, 154, 142, 1)", color: "#fff" }}
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
          date="Tuesday, 21 June 2022"
          iconStyle={{ background: "rgba(94, 154, 142, 1)", color: "#fff" }}
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
          date="Wednesday, 22 June 2022"
          iconStyle={{ background: "rgba(94, 154, 142, 1)", color: "#fff" }}
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
          date="Thursday, 23 June 2022"
          iconStyle={{ background: "rgba(94, 154, 142, 1)", color: "#fff" }}
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
