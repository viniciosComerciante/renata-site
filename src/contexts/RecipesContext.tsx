
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import {Recipe} from "../pages/index";

interface RecipesProviderProps {
  children: ReactNode;
}

interface RecipesContextData{
  recipes?: Recipe[];
  changeRecipes : (recipes:Recipe[]) => void;
}

const RecipesContext = createContext<RecipesContextData>({} as RecipesContextData);

export function RecipesProvider({
  children,
}: RecipesProviderProps) {

  const [recipes, setRecipes] = useState<Recipe[]>();

  function changeRecipes(recipes: Recipe[]){
    setRecipes(recipes);
  }

  return (
    <RecipesContext.Provider value={{recipes, changeRecipes}}>
      {children}
    </RecipesContext.Provider>
  );
}

export const useRecipes = () => useContext(RecipesContext);
