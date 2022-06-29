import { AppProps } from 'next/app';
import { RecipesProvider } from '../contexts/RecipesContext';


import '../styles/global.scss';


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <RecipesProvider>
      <Component {...pageProps} />
    </RecipesProvider>

  );
}

export default MyApp;
