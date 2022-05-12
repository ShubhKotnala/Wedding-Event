import { StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import { imgs } from "../../assets/images";

function Introduction() {
  const showAseemCard = () => {
    return (
      <div className="card-container">
        <img src={imgs.countdownImg} alt="Tanya" className="intro-img" />
        <Text size={FontSize.ExtraRegular} weight={FontWeight.Bold}>
          Aseem Bansal
        </Text>
        <Text>
          Hi, Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </Text>
      </div>
    );
  };

  const showTanyaCard = () => {
    return (
      <div className="card-container">
        <img src={imgs.heroImg} alt="Tanya" className="intro-img" />
        <Text size={FontSize.ExtraRegular} weight={FontWeight.Bold}>
          Tanya Sharma
        </Text>
        <Text>
          Hi, Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </Text>
      </div>
    );
  };

  return (
    <StyledContainer>
      {showAseemCard()}
      {showTanyaCard()}
    </StyledContainer>
  );
}

export default Introduction;
