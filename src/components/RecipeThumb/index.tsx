import styles from './styles.module.scss'
import Image from 'next/image'


interface RecipeThumbProps{
  imgUrl?: string;
  category: string;
  likes: number;
  title:string;
  subtitle: string;
}


export function RecipeThumb({imgUrl,category, likes, title,subtitle}:RecipeThumbProps){
  return(
    <article className={styles.thumb}>
      <div className={styles.wrapper}>
        <img className={styles.backgroundImg} src={imgUrl || "https://renata.com.br/images/receitas/233/renata-imagem-receitas-bolo-piscininha-de-cenoura-thumb.jpg"}alt="Renata logo"></img>

      <div className={styles.recipeDescription}>
        <div className={styles.header}>
          <span>{category}</span>
          <span className={styles.likes}>
          <img src="/images/icon-heart.svg" alt="icon heart" />
          {likes}
          </span>
        </div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      </div>
    </article>
  )
}
