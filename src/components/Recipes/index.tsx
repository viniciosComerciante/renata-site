import { RecipeThumb } from '../RecipeThumb';
import styles from './styles.module.scss';
import { useRecipes } from '../../contexts/RecipesContext';

interface Recipe {
  _id: string;
  title: string;
  category: string;
  ingredients: string;
  preparation: string;
  author: string;
  img: string;
  active: boolean;
  __v: number;
}

export function Recipes() {
  const { recipes } = useRecipes();

  return (
    <section className={styles.container}>
      <h1>
        Receitas
        <br />
        para você
      </h1>

      <div className={styles.recipesContainer}>
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeThumb
              imgUrl={recipe.img}
              category={recipe.category}
              title={recipe.title}
              likes={200}
              subtitle="teste teste"
              key={index}
            ></RecipeThumb>
          ))}
      </div>
    </section>
  );
}
