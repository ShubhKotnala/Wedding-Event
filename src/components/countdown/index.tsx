import React, { Component } from "react";
import { TimerContainer, StyledTimerContainer, Container } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";

class CountDown extends Component<any, any> {
  state = {
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
    timeUp: false,
  };

  componentDidMount() {
    setInterval(() => {
      let difference =
        new Date(this.props.date).getTime() - new Date().getTime();
      if (difference < 1) {
        this.setState({ timeUp: true });
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        this.setState({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days,
        });
      }
    }, 1000);
  }

  showTimerBox(label: string, value: any) {
    return (
      <StyledTimerContainer>
        <Text size={FontSize.Large} color="#5e9a8e" weight={FontWeight.Medium}>
          {value}
        </Text>
        <Text size={FontSize.ExtraSmall} color="#5e9a8e">
          {label.toUpperCase()}
        </Text>
      </StyledTimerContainer>
    );
  }

  render() {
    const { days, hours, minutes, seconds, timeUp } = this.state;
    const dayString = days > 1 ? "days" : "day";
    return (
      <Container>
        <div className="waiting-text">
          <Text size={FontSize.Small} weight={FontWeight.Medium} color="#fff">
            {timeUp ? "The time has come..." : "We're waiting for..."}
          </Text>
        </div>
        <div className="adventure-text">
          <Text
            size={FontSize.ExtraRegular}
            weight={FontWeight.Bold}
            color="#fff"
          >
            {timeUp ? "Join us!" : "the Adventure to begin!"}
          </Text>
        </div>
        <TimerContainer>
          {this.showTimerBox(dayString, days)}
          {this.showTimerBox("hours", hours)}
          {this.showTimerBox("minutes", minutes)}
          {this.showTimerBox("seconds", seconds)}
        </TimerContainer>
      </Container>
    );
  }
}
export default CountDown;
