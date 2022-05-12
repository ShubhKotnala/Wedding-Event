import { StyledContainer } from "./style";
import { useEffect, useState } from "react";
import { imgs } from "../../assets/images";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setImages(res);
      })
      .catch((err) => {
        setImages([]);
      });
  }, []);

  return (
    <StyledContainer>
      <img src={imgs.gallery} alt="Wedding Photos" className="headerImg" />

      <div className="gallery">
        <div className="column">
          {images.slice(0, 2).map((img: any) => (
            <img src={img?.url} key={img?.id} alt={img?.id} className="img" />
          ))}
        </div>
        <div className="column">
          {images.slice(2, 4).map((img: any) => (
            <img src={img?.url} key={img?.id} alt={img?.id} className="img" />
          ))}
        </div>
        <div className="column">
          {images.slice(4, 6).map((img: any) => (
            <img src={img?.url} key={img?.id} alt={img?.id} className="img" />
          ))}
        </div>
        <div className="column">
          {images.slice(6, 8).map((img: any) => (
            <img src={img?.url} key={img?.id} alt={img?.id} className="img" />
          ))}
        </div>
      </div>

      <button className="viewButton">View More</button>
    </StyledContainer>
  );
}

export default Gallery;
