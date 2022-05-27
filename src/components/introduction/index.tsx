import { StyledContainer } from "./style";
import { imgs } from "../../assets/images";

function Introduction() {
  const showAseemCard = () => {
    return <img src={imgs.Aseem} alt="Aseem" className="intro-img" />;
  };

  const showTanyaCard = () => {
    return <img src={imgs.Tanya} alt="Tanya" className="intro-img" />;
  };

  return (
    <StyledContainer>
      <img src={imgs.brideGroom} alt="Bride & Groom" className="headerImg" />
      <div className="container">
        {showTanyaCard()}
        <img src={imgs.heart} alt="Weds" className="logoImg" />
        {showAseemCard()}
      </div>
    </StyledContainer>
  );
}

export default Introduction;
