import Image from 'next/image';
import React, { MutableRefObject, useEffect, useState } from 'react';
import { useRecipes } from '../../contexts/RecipesContext';
import { useRequest } from '../../hooks/useRequest';
import { Recipe } from '../../pages/index';

import styles from './styles.module.scss';

interface HeaderProps {
  onRequestOpen: () => void;
  refRecipes: MutableRefObject<null | HTMLElement>
}
interface RecipesRequest {
  result: Recipe[];
}

export const Header: React.FC<HeaderProps> = ({ onRequestOpen, refRecipes }) => {
  const { changeRecipes } = useRecipes();
  const { data, setUrl } = useRequest<RecipesRequest>('');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  function handleChangeUrl(category: string) {
    setUrl(
      'https://renata-api.herokuapp.com/api/v1/recipe/category/' + category
    );
  }

  function verifyScrollDirection(e) {
    setLastScrollTop(this.scrollY);
    this.scrollY >= lastScrollTop
      ? setIsScrollingDown(true)
      : setIsScrollingDown(false);
    if(this.scrollY <= 0) setIsScrollingDown(false)
  }

  useEffect(() => {
    if (!data) return;
    changeRecipes(data.result);
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', verifyScrollDirection);

    return () => {
      window.removeEventListener('scroll', verifyScrollDirection);
    };
  }, [setLastScrollTop, verifyScrollDirection]);

  return (
    <header
      className={
        styles.header + ' ' + (isScrollingDown ? styles.scrollingDown : '')
      }
    >
      <div className={styles.container}>
        <div className={styles.hamburguerIconContainer} onClick={onRequestOpen}>
          <img
            src="https://renata.com.br/assets/img/icons/icon-menu.svg"
            alt="icone menu hamburguer"
            className={styles.hamburguerIcon}
          />
        </div>
        <img
          src="/images/logo-renata.svg"
          alt="renata logo"
          className={styles.logo}
        />
        <nav className={styles.nav}>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('inspirado-no-chef');
            }}
          >
            Inspirado no MasterChef Brasil
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('emocao-em-familia');
            }}
          >
            Emo????o em Fam??lia
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('e-pra-ja');
            }}
          >
            ?? Pra J??
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('sinta-se-leve');
            }}
          >
            Sinta-se Leve
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('doces-emocoes');
            }}
          >
            Doces Emo????es
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              refRecipes.current?.scrollIntoView({behavior: 'smooth'});
              handleChangeUrl('meus-favoritos');
            }}
          >
            Meus Favoritos
            <span>0</span>
          </a>
        </nav>
        <img
          src="/images/search.svg"
          alt="search recipe"
          className={styles.searchIcon}
        />
      </div>
    </header>
  );
};
