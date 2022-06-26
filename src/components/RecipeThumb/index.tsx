import styles from './styles.module.scss'
import Image from 'next/image'


interface RecipeThumbProps{
  imgUrl?: string
}


export function RecipeThumb({imgUrl}:RecipeThumbProps){
  return(
    <article className={styles.thumb}>
      <div className={styles.wrapper}>
        <img className={styles.backgroundImg} src={imgUrl || "https://renata.com.br/images/receitas/233/renata-imagem-receitas-bolo-piscininha-de-cenoura-thumb.jpg"}alt="Renata logo"></img>

      <div className={styles.recipeDescription}>
        <div className={styles.header}>
          <span>Doces e Emoções</span>
          <span className={styles.likes}>
          <img src="/images/icon-heart.svg" alt="icon heart" />
          195
          </span>
        </div>
        <h2>Bolo Piscininha de Cenoura</h2>
        <p>Bolo feito com Mistura para Bolo Renata sabor cenoura, coberto com brigadeiro cremoso.</p>
      </div>
      </div>
    </article>
  )
}
