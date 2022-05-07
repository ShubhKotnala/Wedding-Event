import { StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import { imgs } from "../../assets/images";

function Introduction() {
  const showAseemCard = () => {
    return (
      <div className="container">
        <img src={imgs.countdownImg} alt="Aseem" className="intro-img" />
        <div className="details">
          <Text size={FontSize.Large} weight={FontWeight.Bold}>
            DULHA
          </Text>
          <Text>
            Hi, dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </Text>

          <Text size={FontSize.Mini}>- Aseem</Text>
        </div>
      </div>
    );
  };

  const showTanyaCard = () => {
    return (
      <div className="container">
        <img src={imgs.heroImg} alt="Tanya" className="intro-img" />
        <div className="details">
          <Text size={FontSize.Large} weight={FontWeight.Bold}>
            DULHAN
          </Text>
          <Text>
            Hi, Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries.
          </Text>

          <Text size={FontSize.Mini}>- Tanya</Text>
        </div>
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
