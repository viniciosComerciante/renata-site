import React, { MutableRefObject, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RecipeThumb } from '../RecipeThumb';
import { useRecipes } from '../../contexts/RecipesContext';
import styles from './styles.module.scss';


interface RecipeProps{
  refRecipes : MutableRefObject<null | HTMLElement>;
}


export const Recipes: React.FC<RecipeProps> = ({refRecipes}) => {
  const { recipes } = useRecipes();
  const [animate, setAnimate] = useState(false);

  React.useEffect(() => {
    setAnimate(true);

    return () => {
      setAnimate(false);
    };
  }, []);

  return (
    <section className={`${styles.container} ${animate ? styles.animate : ''}`} ref={refRecipes}>
      <h1>
        Receitas
        <br />
        para você
      </h1>

      <div
        className={styles.recipesContainer}
      >
        <AnimatePresence>
          {recipes &&
            recipes.map((recipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <RecipeThumb
                  imgUrl={recipe.img}
                  category={recipe.category}
                  title={recipe.title}
                  likes={200}
                  subtitle={recipe.description}
                  key={index}
                ></RecipeThumb>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
