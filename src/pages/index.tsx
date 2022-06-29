import axios from 'axios';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Recipes } from '../components/Recipes';
import { SlideShow } from '../components/SlideShow';
import { GetServerSideProps } from 'next';
import { useRecipes } from '../contexts/RecipesContext';
import { useEffect, useState } from 'react';
import { MenuModal } from '../components/MenuModal';

export interface Recipe {
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

interface HomeProps {
  data: Recipe[];
}

export default function Home({ data }: HomeProps){

  const [isOpen, setIsOpen] = useState(false);

  function onRequestClose(){
    setIsOpen(false);
  }

  function onRequestOpen(){
    setIsOpen(true);
  }


  const { changeRecipes } = useRecipes();
  useEffect(() => {
    changeRecipes(data);
  }, []);
  return (
    <>
      <Header onRequestOpen={onRequestOpen}></Header>
      <SlideShow></SlideShow>
      <Recipes></Recipes>
      <Footer></Footer>
      <MenuModal isOpen={isOpen} onRequestClose={onRequestClose}></MenuModal>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios
    .get('https://renata-api.herokuapp.com/api/v1/recipe')
    .then(response => response.data.result);
  return { props: { data } };
};
