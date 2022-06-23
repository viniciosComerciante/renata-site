import styles from './styles.module.scss'
import Image from 'next/image'


interface RecipeThumbProps{
  imgUrl?: string
}


export function RecipeThumb({imgUrl}:RecipeThumbProps){
  return(
    <article className={styles.thumb}>

        <Image src={imgUrl || "https://renata.com.br/images/receitas/233/renata-imagem-receitas-bolo-piscininha-de-cenoura-thumb.jpg"} height={330} width={350} alt="Renata logo"></Image>

      <div className={styles.recipeDescription}>
        <div className={styles.header}>
          <span>Doces e Emoções</span>
          s2
        </div>
        <h2>Bolo Piscininha de Cenoura</h2>
        <p>Bolo feito com Mistura para Bolo Renata sabor cenoura, coberto com brigadeiro cremoso.</p>
      </div>
    </article>
  )
}
