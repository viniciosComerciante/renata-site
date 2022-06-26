import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";


type getScreenWidth = (event:Event) => void;


export function Header(){


  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(()=>{
    window.addEventListener('resize', getScreenWidth);
    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);



    function getScreenWidth(event):getScreenWidth{
      setWindowWidth(event.srcElement.innerWidth);
      return;
    }


    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="/images/logo-renata.svg" alt="renata logo" className={styles.logo}/>
                <nav className={styles.nav}>
                    <a href="#">Inspirado no MasterChef Brasil</a>
                    <a href="#">Emoção em Família</a>
                    <a href="#">É Pra Já</a>
                    <a href="#">Sinta-se Leve</a>
                    <a href="#">Doces Emoções</a>
                    <a href="#">Meus Favoritos
                      <span>0</span>
                    </a>
                    <img src="/images/search.svg" alt="search recipe" />
                </nav>

            </div>
        </header>
    )
}
