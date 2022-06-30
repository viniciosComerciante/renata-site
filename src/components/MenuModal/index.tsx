import { useEffect } from 'react';
import Modal from 'react-modal';

import styles from './styles.module.scss';

Modal.setAppElement('#__next');

interface MenuModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={3000}
      //estilos adicionados no css global
      overlayClassName={`react-modal-overlay ${isOpen ? '' : 'overlayClosed'}`}
      className={`react-modal-content  ${isOpen ? '' : 'contentClosed'}`}
    >
      <div>
        <div className={styles.modalHeader}>
          <div className={styles.closeImg}>
            <img
              src="https://renata.com.br/assets/img/icons/icon-close.svg"
              alt="icone fechar modal"
              onClick={onRequestClose}
            />
          </div>
          <div className={styles.divLogo}>
            <img
              src="./images/logo-renata.svg"
              alt="logo renata"
              className={styles.renataLogo}
            />
          </div>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.menu}>
          <a href="" title="Toque para acessar">
            Home
          </a>
          <a href="" title="Toque para acessar">
            Inspirado no MasterChef Brasil
          </a>
          <a href="" title="Toque para acessar">
            Emoção em Família
          </a>
          <a href="" title="Toque para acessar">
            É Pra Já
          </a>
          <a href="" title="Toque para acessar">
            Sinta-se Leve
          </a>
          <a href="" title="Toque para acessar">
            Doces Emoções
          </a>
          <a href="" title="Toque para acessar" className={styles.favorites}>
            Meus Favoritos <span className={styles.badge}>2</span>
          </a>
          <a href="" title="Toque para acessar">
            Conheça Renata
          </a>
          </div>

          <div className={styles.socials}>
          <p>Nossas redes sociais</p>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/marca.renata/"
              title="Curta Nossa Página no Facebook"
              target="_blank"
            >
              <svg
                width="41px"
                height="41px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-72.000000, -3728.000000)"
                    fill="#FFA451"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(0.000000, 3142.000000)">
                      <g transform="translate(72.000000, 586.000000)">
                        <path d="M0,24 C0,10.7451654 10.7451654,0 24,0 C37.2548346,0 48,10.7451654 48,24 C48,37.2548346 37.2548346,48 24,48 C10.7451654,48 0,37.2548346 0,24 Z M26.5015551,38.1114767 L26.5015551,25.0542096 L30.1059318,25.0542096 L30.5835896,20.554603 L26.5015551,20.554603 L26.5076789,18.3025066 C26.5076789,17.12894 26.6191834,16.5001162 28.3047641,16.5001162 L30.5580737,16.5001162 L30.5580737,12 L26.9531866,12 C22.6231375,12 21.0990725,14.1827933 21.0990725,17.8535652 L21.0990725,20.5551126 L18.4,20.5551126 L18.4,25.0547192 L21.0990725,25.0547192 L21.0990725,38.1114767 L26.5015551,38.1114767 Z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://instagram.com/marca.renata/"
              title="Siga Nossa Página no Instagram"
              target="_blank"
            >
              <svg
                width="41px"
                height="41px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-155.000000, -3728.000000)"
                    fill="#FFA451"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(0.000000, 3142.000000)">
                      <g transform="translate(155.000000, 586.000000)">
                        <path d="M0,24 C0,10.7451654 10.7451654,0 24,0 C37.2548346,0 48,10.7451654 48,24 C48,37.2548346 37.2548346,48 24,48 C10.7451654,48 0,37.2548346 0,24 Z M24.0012,11.2 C20.5248971,11.2 20.0886259,11.2152002 18.7232784,11.2773342 C17.3605975,11.3397348 16.4304545,11.5554704 15.6165794,11.872007 C14.7747039,12.1989438 14.0605631,12.6362816 13.349089,13.3480224 C12.6370816,14.0594965 12.1997438,14.7736372 11.8717403,15.615246 C11.5544037,16.4293878 11.3384014,17.3597975 11.2770674,18.721945 C11.2160002,20.0872926 11.2,20.5238305 11.2,24.0001334 C11.2,27.4764362 11.2154668,27.9113741 11.2773342,29.2767216 C11.3400014,30.6394025 11.555737,31.5695455 11.872007,32.3834206 C12.1992104,33.2252961 12.6365483,33.9394369 13.348289,34.650911 C14.0594965,35.3629184 14.7736372,35.801323 15.6149794,36.1282597 C16.4293878,36.4447963 17.3597975,36.6605319 18.7222117,36.7229326 C20.0875593,36.7850665 20.5235638,36.8002666 23.9996,36.8002666 C27.4761695,36.8002666 27.9111074,36.7850665 29.276455,36.7229326 C30.6391358,36.6605319 31.5703455,36.4447963 32.384754,36.1282597 C33.2263628,35.801323 33.9394369,35.3629184 34.6506442,34.650911 C35.3626517,33.9394369 35.7999896,33.2252961 36.127993,32.3836874 C36.442663,31.5695455 36.6586652,30.6391358 36.7226658,29.2769883 C36.7839998,27.9116407 36.8,27.4764362 36.8,24.0001334 C36.8,20.5238305 36.7839998,20.0875593 36.7226658,18.7222117 C36.6586652,17.3595308 36.442663,16.4293878 36.127993,15.6155126 C35.7999896,14.7736372 35.3626517,14.0594965 34.6506442,13.3480224 C33.9386369,12.636015 33.2266294,12.198677 32.383954,11.872007 C31.5679455,11.5554704 30.6372691,11.3397348 29.2745882,11.2773342 C27.9092407,11.2152002 27.4745695,11.2 23.9972,11.2 L24.0012,11.2 Z"></path>
                        <path d="M22.8529214,13.5066907 C23.193725,13.5061574 23.5739956,13.5066907 24.0012,13.5066907 C27.4188356,13.5066907 27.8239065,13.5189575 29.1735206,13.5802914 C30.4215335,13.6373587 31.0988739,13.8458942 31.5500786,14.0210961 C32.1474182,14.2530985 32.5732893,14.5304347 33.0210273,14.9784394 C33.469032,15.426444 33.7463682,15.8531151 33.9789039,16.4504547 C34.1541058,16.9011261 34.3629079,17.5784665 34.4197086,18.8264794 C34.4810425,20.1758268 34.494376,20.5811644 34.494376,23.9972 C34.494376,27.4132355 34.4810425,27.8185731 34.4197086,29.1679205 C34.3626413,30.4159335 34.1541058,31.0932739 33.9789039,31.5439453 C33.7469015,32.1412848 33.469032,32.5666226 33.0210273,33.0143606 C32.5730226,33.4623652 32.1476849,33.7397014 31.5500786,33.9717038 C31.0994073,34.1477057 30.4215335,34.3557078 29.1735206,34.4127751 C27.8241732,34.4741091 27.4188356,34.4874426 24.0012,34.4874426 C20.5832978,34.4874426 20.1782269,34.4741091 18.8288794,34.4127751 C17.5808665,34.3551746 16.9035261,34.146639 16.4520547,33.9714372 C15.8547151,33.7394348 15.4280441,33.4620986 14.9800394,33.0140939 C14.5320347,32.5660892 14.2546985,32.1404848 14.0221627,31.5428786 C13.8469609,31.0922072 13.6381587,30.4148668 13.5813582,29.1668538 C13.5200242,27.8175064 13.5077574,27.4121689 13.5077574,23.9939999 C13.5077574,20.575831 13.5200242,20.1726268 13.5813582,18.8232794 C13.6384254,17.5752664 13.8469609,16.897926 14.0221627,16.4467214 C14.2541651,15.8493818 14.5320347,15.4227106 14.9800394,14.974706 C15.4280441,14.5267013 15.8547151,14.2493651 16.4520547,14.0168294 C16.9032594,13.8408275 17.5808665,13.6328254 18.8288794,13.5754914 C20.0096918,13.5221575 20.4672966,13.5061574 22.8529214,13.5034906 L22.8529214,13.5066907 Z M30.8338045,15.6320462 C29.9857957,15.6320462 29.2977885,16.3192534 29.2977885,17.1675288 C29.2977885,18.0155377 29.9857957,18.7035448 30.8338045,18.7035448 C31.6818134,18.7035448 32.3698205,18.0155377 32.3698205,17.1675288 C32.3698205,16.31952 31.6818134,15.6315128 30.8338045,15.6315128 L30.8338045,15.6320462 Z M24.0012,17.4267315 C20.3710289,17.4267315 17.4277982,20.3699622 17.4277982,24.0001334 C17.4277982,27.6303045 20.3710289,30.5722018 24.0012,30.5722018 C27.6313712,30.5722018 30.5735351,27.6303045 30.5735351,24.0001334 C30.5735351,20.3699622 27.6311045,17.4267315 24.0009334,17.4267315 L24.0012,17.4267315 Z"></path>
                        <path d="M24.0012,19.7334222 C26.3574912,19.7334222 28.2679111,21.6435754 28.2679111,24.0001334 C28.2679111,26.3564246 26.3574912,28.2668445 24.0012,28.2668445 C21.6446422,28.2668445 19.7344889,26.3564246 19.7344889,24.0001334 C19.7344889,21.6435754 21.6446422,19.7334222 24.0012,19.7334222 L24.0012,19.7334222 Z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/marcarenata"
              title="Inscreva-se em nosso canal no youtube"
              target="_blank"
            >
              <svg
                width="41px"
                height="41px"
                viewBox="0 0 41 41"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"

              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="#FFA451" fill-rule="nonzero">
                    <path d="M0,20.5 C0,9.17816208 9.17816208,0 20.5,0 C31.8218379,0 41,9.17816208 41,20.5 C41,31.8218379 31.8218379,41 20.5,41 C9.17816208,41 0,31.8218379 0,20.5 Z M30.9763697,15.4375415 C30.724903,14.4714735 29.9839212,13.7107361 29.0430333,13.4525519 C27.3379303,12.9833333 20.5,12.9833333 20.5,12.9833333 C20.5,12.9833333 13.6620697,12.9833333 11.9568424,13.4525519 C11.0159546,13.7107361 10.2749728,14.4714735 10.0235061,15.4375415 C9.56666667,17.1884289 9.56666667,20.8416667 9.56666667,20.8416667 C9.56666667,20.8416667 9.56666667,24.4947777 10.0235061,26.2457918 C10.2749728,27.2118598 11.0159546,27.9725972 11.9568424,28.2309082 C13.6620697,28.7 20.5,28.7 20.5,28.7 C20.5,28.7 27.3379303,28.7 29.0430333,28.2309082 C29.9839212,27.9725972 30.724903,27.2118598 30.9763697,26.2457918 C31.4333333,24.4947777 31.4333333,20.8416667 31.4333333,20.8416667 C31.4333333,20.8416667 31.4333333,17.1884289 30.9763697,15.4375415 Z"></path>
                    <polygon points="18.45 24.6 18.45 17.7666667 23.9166667 21.1834639"></polygon>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        </div>

      </div>
    </Modal>
  );
};
