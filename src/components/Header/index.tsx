import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecipes } from "../../contexts/RecipesContext";
import { useRequest } from "../../hooks/useRequest";
import {Recipe} from "../../pages/index";

import styles from "./styles.module.scss";


interface RecipesRequest{
  result:Recipe[]
}

export function Header(){

  const {changeRecipes} = useRecipes();
  const {data, setUrl} = useRequest<RecipesRequest>("");

  function handleChangeUrl(category: string){
    setUrl("http://localhost:3008/api/v1/recipe/category/" + category);
  }

  console.log(data);

  useEffect(()=>{
  if(!data) return;
    changeRecipes(data.result)
  }, [data]);


    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="/images/logo-renata.svg" alt="renata logo" className={styles.logo}/>
                <nav className={styles.nav}>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("inspirado-no-chef")
                    }}>Inspirado no MasterChef Brasil</a>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("emocao-em-familia")
                    }}>Emoção em Família</a>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("e-pra-ja")
                    }}>É Pra Já</a>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("sinta-se-leve")
                    }}>Sinta-se Leve</a>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("doces-emocoes")
                    }}>Doces Emoções</a>
                    <a onClick={(e)=>{
                      e.preventDefault()
                      handleChangeUrl("meus-favoritos")
                    }}>Meus Favoritos
                      <span>0</span>
                    </a>
                    <img src="/images/search.svg" alt="search recipe" />
                </nav>

            </div>
        </header>
    )
}
