import { StyledContainer } from "./style";
import { imgs } from "../../assets/images";

function Introduction() {
  const showAseemCard = () => {
    return <img src={imgs.Aseem} loading="lazy" alt="Aseem" className="intro-img" />;
  };

  const showTanyaCard = () => {
    return <img src={imgs.Tanya} loading="lazy" alt="Tanya" className="intro-img" />;
  };

  return (
    <StyledContainer>
      <img src={imgs.brideGroom} loading="lazy" alt="Bride & Groom" className="headerImg" />
      <div className="container">
        {showTanyaCard()}
        <img src={imgs.heart} loading="lazy" alt="Weds" className="logoImg" />
        {showAseemCard()}
      </div>
    </StyledContainer>
  );
}

export default Introduction;
