import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RecipeThumb } from '../RecipeThumb';
import { useRecipes } from '../../contexts/RecipesContext';
import styles from './styles.module.scss';

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
  const [animate, setAnimate] = useState(false);

  React.useEffect(() => {
    setAnimate(true);

    return () => {
      setAnimate(false);
    };
  }, []);

  return (
    <section className={`${styles.container} ${animate ? styles.animate : ''}`}>
      <h1>
        Receitas
        <br />
        para você
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        className={styles.recipesContainer}
      >
        <AnimatePresence>
          {recipes &&
            recipes.map((recipe, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <RecipeThumb
                  imgUrl={recipe.img}
                  category={recipe.category}
                  title={recipe.title}
                  likes={200}
                  subtitle="teste teste"
                  key={index}
                ></RecipeThumb>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
