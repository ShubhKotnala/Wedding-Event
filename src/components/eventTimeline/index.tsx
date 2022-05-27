import { StyledContainer } from "./style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { imgs } from "../../assets/images";
import { Text, FontSize, FontWeight } from "../../helpers/text";

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
          iconStyle={{
            background: "#e3dcdc",
            color: "#000",
          }}
        >
          <div className="content">
            {/* <img src={imgs.mehendiA} alt="Mehendi" className="logoImg" /> */}

            {/* <div className="content-details"> */}
            <div>
              <Text
                size={FontSize.Large}
                weight={FontWeight.Bold}
                styles={{
                  fontFamily: "Marck Script",
                  margin: "0.5rem",
                  textAlign: "center",
                }}
                color="#668679"
              >
                Mehendi
              </Text>
              {/* <Text
                size={FontSize.ExtraSmall}
                weight={FontWeight.Bold}
                styles={{
                  // fontFamily: "Marck Script",
                  margin: "0.5rem",
                  textAlign: "center",
                }}
                color="#668679"
              >
                1 C Mahaveer international colony, Behind
                Vridhashram <br /> 03:30pm
              </Text> */}
              <div>
                <h4>Where</h4> - 1 C Mahaveer international colony, Behind
                Vridhashram
                <br />
                <h4>When</h4> - 03:30pm
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: "none" }}
          contentStyle={{ border: "1px solid #cd5453" }}
          date="Tuesday, 21 June 2022"
          iconStyle={{ background: "#e3dcdc", color: "#000" }}
        >
          <Text
            size={FontSize.Large}
            weight={FontWeight.Bold}
            styles={{
              fontFamily: "Marck Script",
              margin: "0.5rem",
              textAlign: "center",
            }}
            color="#668679"
          >
            Haldi
          </Text>
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
          <Text
            size={FontSize.Large}
            weight={FontWeight.Bold}
            styles={{
              fontFamily: "Marck Script",
              margin: "0.5rem",
              textAlign: "center",
            }}
            color="#668679"
          >
            Ladies Sangeet
          </Text>{" "}
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
          <Text
            size={FontSize.Large}
            weight={FontWeight.Bold}
            styles={{
              fontFamily: "Marck Script",
              margin: "0.5rem",
              textAlign: "center",
            }}
            color="#668679"
          >
            Wedding
          </Text>
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
