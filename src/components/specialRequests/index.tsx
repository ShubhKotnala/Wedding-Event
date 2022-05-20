/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, StyledContainer } from "./style";
import { Text, FontSize } from "../../helpers/text";
import { imgs } from "../../assets/images";
import { useEffect, useState } from "react";

function SpecialRequests() {
  const relatives = [
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Naveen Bansal",
      relationship: "Taya",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Geeta Bansal",
      relationship: "Tayi",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Sandeep Bansal",
      relationship: "Papa",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Neelu Bansal",
      relationship: "Mumma",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Neeraj Garg",
      relationship: "Jiju",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Nitika Garg",
      relationship: "Behen",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Nitin Bansal",
      relationship: "Bhai",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Divya Bansal",
      relationship: "Bhabhi",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Samta Bansal",
      relationship: "Behen",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Nipun Bansal",
      relationship: "Bhai",
    },
    {
      logo: imgs.countdownImg,
      message:
        "Far far away, behind the word mountains. Separated they live in, a large language ocean.",
      name: "Baby Garg",
      relationship: "Bhanja",
    },
  ];

  const [currentImg, setCurrentImg] = useState<number>(0);

  useEffect(() => {
    if (currentImg === 10) {
      setTimeout(() => setCurrentImg((p) => 0), 3000);
    } else {
      setTimeout(() => setCurrentImg((p) => p + 2), 3000);
    }
  });

  const showCard = (item: any, index: number) => {
    return (
      <Card key={index}>
        <Text size={FontSize.Small}>{item?.message}</Text>

        <div className="row">
          <div>
            <img src={item?.logo} alt={item?.relationship} className="logo" />
          </div>
          <div className="column">
            <Text size={FontSize.Regular}>{item?.name}</Text>
            <Text size={FontSize.Mini}>{item?.relationship}</Text>
          </div>
        </div>
      </Card>
    );
  };

  console.log("currentImg",currentImg);

  return (
    <StyledContainer>
      <img
        src={imgs.specialRequest}
        alt="Special Request"
        className="headerImg"
      />
      <div className="divider" />

      <div className="slideshow">
        {showCard(relatives[currentImg], currentImg)}
        {currentImg < relatives.length - 1 &&
          showCard(relatives[currentImg + 1], currentImg + 1)}
      </div>
      <div className="dot-container">
        {[0, 2, 4, 6, 8, 10].map((el) => (
          <div className={`dot ${currentImg === el && " active"}`} key={el} />
        ))}
      </div>
    </StyledContainer>
  );
}

export default SpecialRequests;
