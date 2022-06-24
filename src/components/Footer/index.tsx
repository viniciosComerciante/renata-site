import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerBackground}>
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <ul>
            <li>Home</li>
            <li>Emoção em Família</li>
            <li>È pra já</li>
            <li>Sinta-se Leve</li>
          </ul>
          <ul>
            <li>Meus Favoritos</li>
            <li>Ispirado no Chef</li>
            <li>Doces Emoções</li>
            <li>Conheça Renata</li>
          </ul>
          <div className={styles.social}>
            <h3>Nossas redes sociais</h3>
            <div>
              <span>face</span>
              <span>insta</span>
              <span>yt</span>
              <span>zap</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <div className={styles.wrapperCopyrights}>
          <div className={styles.imgWrapper}>
            <img src="/images/logo-renata.svg" alt="logo-renata" />
          </div>

          <span>©2022 Shine TV Limited.</span>
          <span>Copyright® Selmi - Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
