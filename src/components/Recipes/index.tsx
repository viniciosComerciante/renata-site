
import { RecipeThumb } from '../RecipeThumb'
import styles from './styles.module.scss'

export function Recipes(){
  return(
    <section className={styles.container}>
      <h1>Receitas<br/>para você</h1>

      <div className={styles.recipesContainer}>
        <RecipeThumb imgUrl='https://renata.com.br/images/receitas/128/renata-imagem-receitas-macarrao-com-molho-branco-e-brocolis-thumb.jpg'></RecipeThumb>
        <RecipeThumb></RecipeThumb>
        <RecipeThumb></RecipeThumb>
        <RecipeThumb></RecipeThumb>
        <RecipeThumb></RecipeThumb>
      </div>
    </section>
  )
}
