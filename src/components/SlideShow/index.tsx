import { Slide } from 'react-slideshow-image';
import styles from './styles.module.scss';
import 'react-slideshow-image/dist/styles.css'

export function SlideShow() {
  const slideImages = [
    {
      url: 'https://renata.com.br/images/receitas/157/renata-imagem-receitas-torta-salgada-de-biscoitos-agua-e-sal-1-xl.jpg',
      title: 'Penne com brie e parma',
      likes: 120,
      category: "Sinta-se Leve"
    },
    {
      url: 'https://renata.com.br/images/receitas/62/renata-imagem-receitas-salada-de-macarrao-a-primavera-1-xl.webp',
      title: 'Bolinhas de queijo empanadas com macarrão capelli d’angelo',
      likes:90,
      category: "Doces emoções"
    },
    {
      url: 'https://renata.com.br/images/receitas/73/renata-imagem-receitas-salada-de-macarrao-integral-1-xl.webp',
      title: 'Bolo integral de banana',
      likes:35,
      category:"Inspirado no chef"
    },
  ];

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className={"indicator "+styles.indicator}></div>
  };

  return (
    <div className="slideContainer">
      <div className={styles.advertisement}> <img src='https://renata.com.br/assets/img/icons/icon-masterchef-w.svg' ></img>Somos patrocinadores oficiais do&nbsp;  <span>MasterChef Brasil</span></div>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={"each-slide "+styles.eachSlide} key={index}>
            <div className={styles.slideImage} style={{ backgroundImage: `url(${slideImage.url})`, height: "500px", objectFit:"cover", width:"100%" }}>
              <div className={styles.slideInfos}>
                <div className={styles.container}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <span>{slideImage.category}</span>
                      <img src="/images/icon-heart.svg" alt="icone coração" />
                      <span>{slideImage.likes}</span>
                    </div>
                    <h1>{slideImage.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
