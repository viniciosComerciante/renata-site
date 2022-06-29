import { useEffect } from 'react';
import Modal from 'react-modal';

import styles from './styles.module.scss'

Modal.setAppElement('#__next');

interface MenuModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export function MenuModal({ isOpen, onRequestClose }: MenuModalProps) {


  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  },[isOpen]);




  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={3000}
      //estilos adicionados no css global
      overlayClassName={`react-modal-overlay ${isOpen? "":"overlayClosed"}`}
      className={`react-modal-content  ${isOpen? "":"contentClosed"}`}
    >
    <div>
      <div className={styles.modalHeader}>
        <img src="https://renata.com.br/assets/img/icons/icon-close.svg" alt="icone fechar modal" onClick={onRequestClose}/>
        <div className={styles.divLogo}>
        <img src="./images/logo-renata.svg" alt="logo renata" className={styles.renataLogo}/>
        </div>

      </div>
    </div>

    </Modal>
  );
}
