import Link from 'next/link'
import styles from './styles.module.scss';



export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSuperior}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.firstColumn}>
              <ul>
                <li>Home</li>
                <li>Emoção em Família</li>
                <li>É pra já</li>
                <li>Sinta-se leve</li>
              </ul>
            </div>
            <div className={styles.secondColumn}>
              <ul>
                <li>Meus Favoritos</li>
                <li>Inspirado no Chef</li>
                <li>Doces Emoções</li>
                <li>Conheça Renata</li>
              </ul>
            </div>
            <div className={styles.social}>
              <p>Nossas redes sociais</p>
              <div>
                <Link href="#">
                  <img src="/images/facebook.svg" alt="facebook icon"/>
                </Link>
                <Link href="#">
                  <img src="/images/instagram.svg" alt="insatagram icon"/>
                </Link>
                <Link href="#">
                  <img src="/images/yt.svg" alt="youtube icon"/>
                </Link>
                <Link href="#">
                  <img src="/images/zap.svg" alt="whatsapp icon"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <div className={styles.container}>
          <div className={styles.row2}>
            <div className={styles.columnLogo}>
              <img src="/images/logo-renata.svg" alt="logo renata" />
            </div>
            <div className={styles.secondColumn}><span>©2022 Shine TV Limited.</span></div>
            <div className={styles.thirdColumn}><span>Copyright® Selmi - Todos os direitos reservados</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
